/* Revisão pedagógica do capítulo de Pascal e Arquimedes. */
(()=>{
'use strict';
const MM=window.MM,lesson=MM?.lessons?.find(x=>x.id==='pascal-arquimedes');
if(!lesson)return;
lesson.slides=lesson.slides.filter(s=>!['Linha de raciocínio','Roteiro de pensamento'].includes(s.label));
const summaries={
 'Princípio de Pascal':'O fluido transmite o acréscimo de pressão. A força pode mudar porque cada êmbolo tem uma área diferente.',
 'Prensa hidráulica':'Na prensa ideal, a razão entre as forças acompanha a razão entre as áreas. Se a área é quatro vezes maior, a força também será quatro vezes maior.',
 'Volume e trabalho':'O êmbolo maior oferece mais força, mas percorre uma distância menor. A prensa troca caminho por força; ela não cria energia.',
 'Aplicações de Pascal':'Freios, prensas e elevadores hidráulicos usam um fluido confinado para levar uma variação de pressão de uma parte do sistema até outra.',
 'Princípio de Arquimedes':'A pressão é maior na parte mais profunda do corpo. A soma das forças de pressão produz o empuxo para cima.',
 'Empuxo com números':'O empuxo é igual ao peso do fluido deslocado. Para calculá-lo, use a densidade do fluido e somente o volume que está mergulhado.',
 'Flutuação':'O corpo sobe, afunda ou se equilibra conforme a comparação entre empuxo e peso. Ter empuxo não significa automaticamente subir.',
 'Peso aparente':'O peso gravitacional não desaparece. O empuxo reduz a parte que o dinamômetro ou seus braços precisam sustentar.'
};
lesson.slides.forEach(slide=>{const text=summaries[slide.label];if(text&&!slide.html.includes('direct-summary'))slide.html+=`<aside class="direct-summary"><strong>Ou seja</strong><p>${text}</p></aside>`;});
const checklist=items=>`<div class="thinking-checklist" data-required-checklist><h2>Roteiro de pensamento</h2><p>Use estes passos enquanto resolve. No modo Aluno, eles servem como apoio e não bloqueiam a navegação.</p>${items.map((x,i)=>`<label><input type="checkbox" value="${i}"><span class="organic-check" aria-hidden="true"><svg viewBox="0 0 28 28"><path d="M5 14.5l6 6L23 7"/></svg></span><span>${x}</span></label>`).join('')}<p class="checklist-status" role="status"></p></div>`;
const press=lesson.slides.find(s=>s.label==='Exercício de Pascal');
if(press&&!press.html.includes('data-required-checklist'))press.html=press.html.replace('<div class="quiz"',checklist(['Identifiquei as áreas dos dois êmbolos.','Comparei A₂/A₁ antes de calcular.','Previ se a força de saída deveria ser maior ou menor.','Usei a mesma razão para F₂/F₁.','Comparei o resultado com a previsão.'])+'<div class="quiz"');
const buoy=lesson.slides.find(s=>s.label==='Exercício de Arquimedes');
if(buoy&&!buoy.html.includes('data-required-checklist'))buoy.html=buoy.html.replace('<div class="quiz"',checklist(['Desenhei peso para baixo e empuxo para cima.','Marquei qual parte do corpo está mergulhada.','Usei a densidade do fluido.','Converti o volume para m³ quando necessário.','Comparei empuxo, peso e leitura do dinamômetro.'])+'<div class="quiz"');
})();
