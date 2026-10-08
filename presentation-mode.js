/* Modo de uso do banco em sala: uma questão por vez, com revelações graduais. */
(()=>{
'use strict';
const MM=window.MM;
const previousPage=MM.exercisePage;
const previousInit=MM.initExercisePage;
if(!previousPage||!previousInit)return;

MM.exercisePage=()=>previousPage().replace(
  '<div class="sample-summary">',
  `<nav class="exercise-modes" aria-label="Forma de usar os exercícios">
    <button class="is-active" data-exercise-mode="practice" aria-pressed="true">Praticar sozinho</button>
    <button data-exercise-mode="presentation" aria-pressed="false">Apresentar em sala</button>
  </nav>
  <section class="presentation-intro" hidden>
    <div><p class="eyebrow">Lista da aula</p><h2>Escolha o que será resolvido em sala</h2><p>Use os filtros e marque apenas as questões ligadas ao conteúdo já trabalhado. A ordem marcada será a ordem da apresentação.</p></div>
    <div class="saved-class-lists"><span>Listas prontas para abrir</span>${(MM.classLists||[]).map(list=>`<button data-open-class-list="${list.id}"><strong>${list.title}</strong><small>${list.questionIds.length} questões</small></button>`).join('')}</div>
    <div class="presentation-list-actions"><button data-select-visible>Marcar questões visíveis</button><button data-clear-presentation>Limpar lista</button></div>
    <div class="active-class-list-note" data-active-list-note hidden></div>
    <p class="presentation-selection-count" data-selection-count>0 questões na lista</p>
    <div class="presentation-builder" data-presentation-builder></div>
    <button class="primary" data-start-presentation disabled>Apresentar esta lista</button>
    <dialog class="question-preview-dialog" data-question-preview><div class="question-preview-card"><button class="preview-close" data-close-preview aria-label="Fechar prévia">×</button><div data-preview-content></div><button class="primary" data-select-preview>Selecionar esta questão</button></div></dialog>
  </section>
  <div class="presentation-stage" hidden></div>
  <div class="sample-summary">`
);

MM.initExercisePage=root=>{
  previousInit(root);
  const practice=root.querySelector('.original-bank');
  const filters=root.querySelector('.original-filters');
  const summary=root.querySelector('.sample-summary');
  const recurrence=root.querySelector('.recurrence');
  const intro=root.querySelector('.presentation-intro');
  const stage=root.querySelector('.presentation-stage');
  const modeButtons=[...root.querySelectorAll('[data-exercise-mode]')];
  let slides=[],current=0,selected=[],activeListId='';

  const buildPicker=()=>{
    if(intro.hidden)return;
    const allCards=[...practice.querySelectorAll('.original-question')];
    const cards=activeListId?selected.map(id=>allCards.find(card=>card.dataset.id===id)).filter(Boolean):allCards;
    const builder=root.querySelector('[data-presentation-builder]');
    const note=root.querySelector('[data-active-list-note]');
    const active=(MM.classLists||[]).find(item=>item.id===activeListId);
    builder.classList.toggle('is-ready-list',Boolean(active));
    builder.tabIndex=active?0:-1;
    builder.setAttribute('aria-label',active?`Questões da lista ${active.title}`:'Questões disponíveis');
    note.hidden=!active;
    if(active)note.innerHTML=`<strong>${active.title}</strong><span>${active.description}</span>`;
    builder.innerHTML=cards.map((card,index)=>{const id=card.dataset.id,title=card.querySelector('h2')?.textContent||'Questão',meta=card.querySelector('small')?.textContent||'';return `<article class="presentation-pick" data-pick-id="${id}"><label title="Adicionar ou retirar da lista"><input type="checkbox" value="${id}" ${selected.includes(id)?'checked':''}><span class="sr-only">Selecionar ${title}</span></label><button data-preview-question="${id}"><span>${String(index+1).padStart(2,'0')}</span><strong>${title}</strong><small>${meta}</small><i>Virar e conferir →</i></button></article>`}).join('')||'<p>Nenhuma questão corresponde aos filtros.</p>';
    const update=()=>{selected=[...builder.querySelectorAll('input:checked')].map(input=>input.value);root.querySelector('[data-selection-count]').textContent=`${selected.length} ${selected.length===1?'questão na lista':'questões na lista'}`;root.querySelector('[data-start-presentation]').disabled=!selected.length;};
    builder.onchange=update;update();
  };

  const setMode=mode=>{
    const presenting=mode==='presentation';
    modeButtons.forEach(b=>{const on=b.dataset.exerciseMode===mode;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});
    intro.hidden=!presenting;
    stage.hidden=true;
    practice.hidden=presenting;
    summary.hidden=presenting;
    recurrence.hidden=presenting;
    filters.hidden=presenting;
    if(!presenting)stage.replaceChildren();else queueMicrotask(buildPicker);
  };

  const draw=()=>{
    const source=slides[current];
    if(!source){stage.innerHTML='<p>Nenhuma questão corresponde aos filtros escolhidos.</p>';return;}
    const card=source.cloneNode(true);
    card.querySelectorAll('input').forEach(input=>{input.disabled=true;input.checked=false;});
    card.querySelector('.quiz-actions')?.remove();
    card.querySelector('.original-feedback')?.remove();
    const solution=card.querySelector('.original-solution');
    if(solution){solution.open=false;solution.hidden=true;}
    stage.innerHTML=`<header class="presentation-toolbar"><span>Questão ${current+1} de ${slides.length}</span><div><button data-reading-view aria-pressed="false">Modo leitura</button><button data-swap-side aria-pressed="false">Trocar lado</button><button data-end-presentation>Encerrar</button></div></header><div class="presentation-classroom"><div class="presentation-question"></div><div class="presentation-workspace" aria-label="Área livre para anotações"></div></div><footer class="presentation-controls"><button data-presentation-prev ${current===0?'disabled':''}>Anterior</button><button class="primary" data-reveal-answer>Revelar resposta</button><button data-presentation-next ${current===slides.length-1?'disabled':''}>Próxima</button></footer><p class="presentation-answer" role="status" hidden></p>`;
    stage.querySelector('.presentation-question').append(card);
    stage.hidden=false;
    intro.hidden=true;
    stage.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  };

  modeButtons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.exerciseMode)));
  root.querySelector('[data-select-visible]')?.addEventListener('click',()=>{activeListId='';selected=[...practice.querySelectorAll('.original-question')].map(card=>card.dataset.id);buildPicker();});
  root.querySelector('[data-clear-presentation]')?.addEventListener('click',()=>{activeListId='';selected=[];buildPicker();});
  root.querySelectorAll('[data-open-class-list]').forEach(button=>button.addEventListener('click',()=>{const list=(MM.classLists||[]).find(item=>item.id===button.dataset.openClassList);activeListId=list?.id||'';selected=list?[...list.questionIds]:[];buildPicker();root.querySelector('[data-presentation-builder]')?.focus({preventScroll:true});}));
  const preview=root.querySelector('[data-question-preview]');let previewId='';
  root.querySelector('[data-presentation-builder]').addEventListener('click',event=>{const button=event.target.closest('[data-preview-question]');if(!button)return;previewId=button.dataset.previewQuestion;const source=[...practice.querySelectorAll('.original-question')].find(card=>card.dataset.id===previewId);if(!source)return;const clone=source.cloneNode(true);clone.querySelectorAll('input').forEach(input=>input.disabled=true);clone.querySelector('.quiz-actions')?.remove();clone.querySelector('.original-feedback')?.remove();clone.querySelector('.original-solution')?.remove();preview.querySelector('[data-preview-content]').replaceChildren(clone);preview.showModal();requestAnimationFrame(()=>preview.classList.add('is-open'));});
  preview.querySelector('[data-close-preview]').addEventListener('click',()=>{preview.classList.remove('is-open');setTimeout(()=>preview.close(),180)});
  preview.querySelector('[data-select-preview]').addEventListener('click',()=>{if(!selected.includes(previewId))selected.push(previewId);preview.classList.remove('is-open');preview.close();buildPicker();});
  filters.addEventListener('change',()=>queueMicrotask(buildPicker));
  filters.addEventListener('reset',()=>setTimeout(buildPicker));
  root.querySelector('[data-start-presentation]')?.addEventListener('click',()=>{
    const cards=[...practice.querySelectorAll('.original-question')];
    slides=selected.map(id=>cards.find(card=>card.dataset.id===id)).filter(Boolean);
    current=0;draw();
  });
  stage.addEventListener('click',e=>{
    if(e.target.closest('[data-reading-view]')){const button=e.target.closest('[data-reading-view]'),reading=stage.classList.toggle('is-reading');button.setAttribute('aria-pressed',String(reading));button.textContent=reading?'Voltar à lousa':'Modo leitura';stage.querySelector('[data-swap-side]').hidden=reading;return;}
    if(e.target.closest('[data-swap-side]')){const button=e.target.closest('[data-swap-side]'),classroom=stage.querySelector('.presentation-classroom'),right=classroom.classList.toggle('question-on-right');button.setAttribute('aria-pressed',String(right));button.textContent=right?'Questão à esquerda':'Questão à direita';return;}
    if(e.target.closest('[data-end-presentation]')){stage.hidden=true;intro.hidden=false;return;}
    if(e.target.closest('[data-presentation-prev]')){current--;draw();return;}
    if(e.target.closest('[data-presentation-next]')){current++;draw();return;}
    if(e.target.closest('[data-reveal-answer]')){
      const id=stage.querySelector('.original-question')?.dataset.id;
      const q=(MM.originalQuestions||[]).find(item=>item.id===id);
      const out=stage.querySelector('.presentation-answer');
      out.innerHTML=q?.answer?`<strong>Alternativa ${q.answer}</strong>`:'<strong>Resposta comentada</strong><p>Compare o caminho construído pela turma com a explicação abaixo.</p>';
      out.hidden=false;
      const solution=stage.querySelector('.original-solution');
      if(solution){solution.hidden=false;solution.open=true;}
      return;
    }

  });
  const pending=sessionStorage.getItem('mm-pending-class-list');
  if(pending){sessionStorage.removeItem('mm-pending-class-list');modeButtons.find(button=>button.dataset.exerciseMode==='presentation')?.click();queueMicrotask(()=>root.querySelector(`[data-open-class-list="${pending}"]`)?.click());}
};
})();


