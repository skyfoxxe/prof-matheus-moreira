/* Ajustes editoriais acordados: nomenclatura, tom de aula e roteiros dentro dos exercícios. */
(()=>{const MM=window.MM;if(!MM?.lessons)return;
const checklist=items=>`<div class="thinking-checklist" data-required-checklist><h3>Roteiro de pensamento</h3><p>Faça uma pausa em cada passo. Marque somente depois de conferir.</p>${items.map((x,i)=>`<label><input type="checkbox" value="${i}"><span class="organic-check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5 9.5 17 19 7"></path></svg></span><span>${x}</span></label>`).join('')}<p class="checklist-status" role="status"></p></div>`;
const lesson=id=>MM.lessons.find(x=>x.id===id),append=(l,label,items)=>{const s=l.slides.find(x=>x.label===label);if(s)s.html+=checklist(items)};
const hydro=lesson('hidrostatica');
hydro.slides=hydro.slides.filter(s=>!['Método de resolução','Linha de raciocínio'].includes(s.label));
append(hydro,'Exercício de densidade',['Separei massa e volume com unidades compatíveis.','Dividi a massa pelo volume.','Comparei o resultado com a densidade da água.']);
append(hydro,'Exercício de Stevin',['Marquei a profundidade vertical.','Calculei apenas o aumento ρgΔh.','Somei a atmosfera somente porque a pergunta pede pressão absoluta.','Comparei o resultado com cerca de 100 kPa por atmosfera.']);
const pascal=lesson('pascal-arquimedes');
pascal.slides=pascal.slides.filter(s=>!['Roteiro de pensamento','Linha de raciocínio'].includes(s.label));
append(pascal,'Exercício de Pascal',['Identifiquei qual êmbolo recebe a força e qual sustenta a carga.','Comparei as áreas antes de calcular.','Se o dado era raio ou diâmetro, calculei a área ao quadrado.','Conferi se a força maior apareceu no êmbolo maior.']);
append(pascal,'Exercício de Arquimedes',['Desenhei peso para baixo e empuxo para cima.','Usei o volume realmente mergulhado.','Comparei empuxo e peso para prever se sobe, desce ou fica em equilíbrio.']);
const dil=lesson('dilatacao');
dil.slides=dil.slides.filter(s=>!['Roteiro de pensamento','Linha de raciocínio'].includes(s.label));
append(dil,'Exercício de sólidos',['Descobri se a pergunta trata de comprimento, área ou volume.','Escolhi α, β ou γ de acordo com essa dimensão.','Se recebi α, converti para β ≈ 2α ou γ ≈ 3α quando necessário.','Calculei ΔT = T<sub>C,f</sub> − T<sub>C,0</sub>.','Separei a variação do valor final.']);
append(dil,'Exercício de líquidos',['Separei a dilatação do líquido da dilatação do recipiente.','Usei ΔV<sub>aparente</sub> = ΔV<sub>líquido</sub> − ΔV<sub>recipiente</sub>.','Conferi se o transbordamento ficou menor que a expansão real do líquido.']);
for(const l of MM.lessons)for(const s of l.slides){s.html=s.html.replaceAll('θ<sub>C</sub>','T<sub>C</sub>').replaceAll('Tfinal','T<sub>C,f</sub>').replaceAll('Tinicial','T<sub>C,0</sub>');}
const press=pascal.slides.find(s=>s.label==='Prensa hidráulica');if(press)press.html=press.html.replace('Considere um êmbolo de 5 cm² ligado a outro de 100 cm². Aplicamos 80 N no menor. Antes da conta, compare as áreas: a saída é vinte vezes maior. Então já esperamos uma força vinte vezes maior.','Imagine dois êmbolos ligados pelo mesmo líquido. O menor tem 5 cm² e o maior tem 100 cm². Você empurra o menor com 80 N. Antes de fazer a conta, repare no desenho: o segundo êmbolo tem uma área vinte vezes maior. Se a mesma mudança de pressão chega aos dois lados, faz sentido esperar que a força de saída também seja vinte vezes maior.');
const linear=dil.slides.find(s=>s.label==='Dilatação linear');if(linear)linear.html=linear.html.replace('Considere uma barra. Se acompanhamos apenas a mudança de comprimento, usamos o coeficiente linear α.','Imagine uma barra comprida sendo aquecida. Ela cresce um pouco em todas as direções, mas agora vamos olhar apenas para o comprimento, como quem acompanha as duas pontas da barra. Para essa mudança usamos o coeficiente linear α.');
})();

