/* Transições pedagógicas visíveis nas mudanças reais de bloco. */
(()=>{
'use strict';
const MM=window.MM;
if(!MM?.renderModeBody)return;
const transitions={dilatacao:{
2:['vimos como temperatura, agitação térmica, Celsius e kelvin ajudam a descrever o aquecimento e o resfriamento.','vamos usar essa base para entender quanto um sólido muda de comprimento, de área ou de volume.'],
6:['vimos como um sólido se dilata, como suas dimensões se relacionam e o que acontece quando ele encontra uma folga ou um apoio.','vamos juntar dois metais diferentes. Como eles tentam se dilatar de maneiras diferentes, a união se curva e forma uma lâmina bimetálica.'],
7:['vimos que duas chapas de metais diferentes, quando estão unidas e são aquecidas, não conseguem se dilatar livremente. Como uma tenta variar mais que a outra, o conjunto se curva.','continuamos dentro da dilatação térmica, mas mudamos de situação: vamos aquecer, ao mesmo tempo, um líquido e o recipiente que o contém.'],
9:['vimos que o líquido aumenta de volume e que o recipiente também ganha capacidade. O que percebemos é a diferença entre essas duas mudanças.','vamos estudar uma exceção importante: perto do congelamento, a água não se comporta como a maioria dos líquidos.'],
10:['construímos as ideias de dilatação dos sólidos, lâminas bimetálicas, líquidos, recipientes e comportamento anômalo da água.','vamos organizar essas ideias num caminho de resolução e aplicá-las aos exercícios.']
},'pascal-arquimedes':{
4:['vimos como uma variação de pressão se transmite num fluido confinado e como a prensa troca percurso por força.','vamos mudar a pergunta. Em vez de acompanhar a pressão entre êmbolos, veremos como diferenças de pressão ao redor de um corpo produzem o empuxo.'],
8:['construímos o empuxo a partir da diferença de pressão e comparamos empuxo, peso, flutuação e leitura do dinamômetro.','vamos aplicar cada princípio separadamente, primeiro na prensa hidráulica e depois num corpo mergulhado.'],
10:['aplicamos Pascal e Arquimedes em duas situações e conferimos as decisões usadas em cada resolução.','vamos reunir as duas ideias e deixar clara a diferença entre transmissão de pressão e empuxo.']
}};
const card=(lesson,index)=>{const item=transitions[lesson.id]?.[index];return item?`<aside class="topic-transition" aria-label="Síntese e mudança de assunto"><span>Mudança de bloco</span><p><strong>Até aqui:</strong> ${item[0]}</p><p><strong>Agora vamos ver:</strong> ${item[1]}</p></aside>`:'';};
const render=MM.renderModeBody;
MM.renderModeBody=(lesson,index,mode,html)=>{const item=transitions[lesson.id]?.[index],clean=html.replace(/<aside class="topic-transition"[\s\S]*?<\/aside>/,''),body=render(lesson,index,mode,clean);return item?card(lesson,index)+body:body;};
})();
