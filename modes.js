/* Arquitetura compartilhada dos modos. O conteúdo da aula permanece único. */
(()=>{const MM=window.MM;
MM.chapterModes={
  hidrostatica:{modes:['professor','aluno','autodidata']},
  'pascal-arquimedes':{modes:['professor','aluno','autodidata']},
  dilatacao:{modes:['professor','aluno','autodidata']}
};
MM.modeDefinitions={
  professor:{label:'Apresentar como professor',short:'Professor',description:'Use a pergunta da turma, o gabarito, os pontos de atenção, a sugestão de lousa e a conclusão esperada.',audience:'Sala de aula'},
  aluno:{label:'Apresentar como aluno',short:'Aluno em aula',description:'Faça previsões, escolha reformulações e explore antes de consultar a explicação.',audience:'Sala de aula'},
  autodidata:{label:'Estudar sozinho',short:'Estudo individual',description:'Combine participação, explicação completa, pistas, feedback e sínteses diretas.',audience:'Estudo individual'}
};
MM.hasModes=id=>Boolean(MM.chapterModes[id]);
MM.modeHref=(id,index=0)=>MM.hasModes(id)?`#modo/${id}/${index}`:`#aula/${id}/${index}`;
MM.modeRoute=(id,index,mode)=>`#aula/${id}/${index}/${mode}`;
MM.getScenePolicy=(lesson,slide,mode)=>({
  mode,
  shared:true,
  teacherOnly:mode==='professor',
  classroomParticipant:mode==='aluno',
  guidedHelp:mode==='autodidata',
  teacherNote:`Objetivo desta cena: ${slide.subtitle||slide.title}. Antes de formalizar, peça uma previsão e escute duas justificativas diferentes.`
});
})();
