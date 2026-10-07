(() => {
'use strict';
const MM=window.MM;
if(!MM?.histories||!MM?.lessons)return;

const id='lago-congela-superficie';
const story={id,title:'Por que um lago congela primeiro por cima?',date:'Investigação',lesson:'dilatacao',desc:'Faça uma previsão, acompanhe o inverno chegar e descubra o comportamento inesperado da água perto de 4 °C.',slides:[{
 label:'Investigação completa',title:'Por que um lago congela primeiro por cima?',subtitle:'Uma pergunta simples que esconde uma mudança de comportamento da água.',html:`<article class="curiosity-investigation" data-lake-investigation>
  <header class="curiosity-hook"><p class="eyebrow">Antes da explicação</p><h2>Se a água fria costuma descer, o gelo não deveria começar no fundo?</h2><p>Imagine uma noite de inverno. O ar retira energia da superfície do lago. Antes de continuar, escolha o que você acha que acontece.</p></header>
  <section class="prediction-step" aria-labelledby="lake-prediction"><h3 id="lake-prediction">Qual é a sua previsão?</h3><div class="prediction-options" role="group" aria-label="Escolha uma previsão"><button data-lake-prediction="bottom">O fundo congela primeiro</button><button data-lake-prediction="together">O lago inteiro congela junto</button><button data-lake-prediction="surface">A superfície congela primeiro</button></div><p class="prediction-feedback" role="status" aria-live="polite">Escolha uma hipótese. Aqui, errar faz parte da investigação.</p></section>
  <section class="lake-observation"><div class="lake-copy"><p class="eyebrow">Faça o inverno avançar</p><h3>Acompanhe o caminho da água</h3><p data-lake-explanation>Começamos com o lago acima de 4 °C. A superfície esfria, fica mais densa e desce. Esse movimento mistura as camadas.</p><div class="lake-controls" role="group" aria-label="Etapas do resfriamento"><button data-lake-stage="0" aria-pressed="true"><span>1</span> Acima de 4 °C</button><button data-lake-stage="1" aria-pressed="false"><span>2</span> Perto de 4 °C</button><button data-lake-stage="2" aria-pressed="false"><span>3</span> Abaixo de 4 °C</button><button data-lake-stage="3" aria-pressed="false"><span>4</span> Gelo na superfície</button></div></div>
  <div class="lake-scene stage-0" aria-label="Corte lateral de um lago durante o resfriamento"><div class="winter-air">ar frio <i aria-hidden="true">↓ ↓ ↓</i></div><div class="ice-layer" aria-hidden="true"></div><div class="water-layer top"><strong data-lake-top>8 °C</strong><span>superfície</span></div><div class="current current-down" aria-hidden="true">↓</div><div class="current current-up" aria-hidden="true">↑</div><div class="water-layer deep"><strong data-lake-deep>10 °C</strong><span>água profunda</span></div><div class="lake-bed" aria-hidden="true"></div></div></section>
  <section class="reveal"><p class="eyebrow">A virada da investigação</p><h3>A água muda de regra perto de 4 °C</h3><p>Enquanto esfria até perto de 4 °C, a água fica mais densa e tende a descer. Abaixo dessa temperatura, acontece o contrário: ao esfriar mais, ela fica menos densa. Por isso, a água próxima de 0 °C permanece em cima e congela ali.</p><p>O gelo também é menos denso que a água líquida, então flutua. A camada formada na superfície dificulta a perda de energia da água que está abaixo. Em muitos lagos, isso ajuda a manter água líquida sob o gelo.</p><aside class="direct-summary"><strong>Ou seja</strong><p>Até 4 °C, a água que esfria desce. Abaixo de 4 °C, a água que esfria fica na superfície. É essa camada de cima que chega primeiro ao congelamento.</p></aside></section>
  <section class="critical-note"><h3>Um lago real é mais complicado</h3><p>Esta experiência isola a ideia principal. Vento, profundidade, correntes e substâncias dissolvidas também alteram o resfriamento. O modelo não prevê cada lago; ele mostra o mecanismo físico que explica por que o congelamento costuma começar por cima.</p></section>
  <footer class="curiosity-sources"><h3>Fontes consultadas</h3><p>O texto e a experiência são autorais, construídos a partir de referências científicas e didáticas.</p><ul><li><a href="https://www.usgs.gov/water-science-school/science/water-density" target="_blank" rel="noopener">USGS — Water Density</a></li><li><a href="https://openstax.org/books/college-physics/pages/13-2-thermal-expansion-of-solids-and-liquids" target="_blank" rel="noopener">OpenStax — Thermal Expansion of Solids and Liquids</a></li><li><a href="https://pmel.noaa.gov/arctic-zone/essay_wadhams.html" target="_blank" rel="noopener">NOAA — How surface waters freeze</a></li></ul></footer>
  <a class="primary curiosity-return" href="#aula/dilatacao/10/autodidata">Voltar à aula: água de 0 a 4 °C</a>
 </article>`
}]};
if(!MM.histories.some(h=>h.id===id))MM.histories.push(story);

const water=MM.lessons.find(l=>l.id==='dilatacao')?.slides.find(s=>s.label==='Água de 0 a 4 °C');
if(water&&!water.html.includes(id))water.html+=`<a class="story-link" href="#historia/${id}/0" data-story="${id}"><span>Curiosidade investigativa</span><strong>Por que um lago congela primeiro por cima?</strong><small>Faça uma previsão e acompanhe o inverno chegar</small></a>`;

MM.initCuriosities=root=>{
 const host=root.querySelector('[data-lake-investigation]');if(!host)return;
 const feedback=host.querySelector('.prediction-feedback');
 host.querySelectorAll('[data-lake-prediction]').forEach(button=>button.addEventListener('click',()=>{
   host.querySelectorAll('[data-lake-prediction]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   const choice=button.dataset.lakePrediction;
   feedback.textContent=choice==='surface'?'Boa previsão. Agora falta descobrir por que ela contraria a regra mais conhecida sobre água fria.':choice==='bottom'?'É uma hipótese razoável: água fria costuma descer. O comportamento perto de 4 °C vai mudar essa previsão.':'Se todas as camadas esfriassem no mesmo ritmo, poderia parecer assim. Mas o ar retira energia primeiro da superfície.';
 }));
 const states=[
  ['8 °C','10 °C','A superfície esfria, fica mais densa e desce. A água um pouco mais quente sobe, criando circulação.'],
  ['4 °C','4 °C','Depois de bastante mistura, grande parte do lago se aproxima de 4 °C, temperatura em que a água líquida atinge sua maior densidade.'],
  ['1 °C','4 °C','Agora surge a surpresa: abaixo de 4 °C, a água que esfria fica menos densa. Ela permanece perto da superfície.'],
  ['0 °C','4 °C','A camada superior chega a 0 °C e congela. O gelo flutua, enquanto a água mais profunda pode continuar líquida, perto de 4 °C.']
 ];
 const scene=host.querySelector('.lake-scene'),top=host.querySelector('[data-lake-top]'),deep=host.querySelector('[data-lake-deep]'),explanation=host.querySelector('[data-lake-explanation]');
 host.querySelectorAll('[data-lake-stage]').forEach(button=>button.addEventListener('click',()=>{const i=Number(button.dataset.lakeStage);host.querySelectorAll('[data-lake-stage]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));scene.className=`lake-scene stage-${i}`;top.textContent=states[i][0];deep.textContent=states[i][1];explanation.textContent=states[i][2];}));
};
})();
