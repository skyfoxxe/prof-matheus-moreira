# Arquitetura dos três modos

## Decisão atual

O capítulo mantém uma única sequência de conteúdo. Os modos alteram controles, ajudas e revelações; eles não duplicam textos, simulações ou questões.

Os três modos estão ativos em **Hidrostática**, **Pascal e Arquimedes** e **Dilatação térmica**.

## Rotas

- `#mapa/dilatacao`: mapa do capítulo.
- `#modo/dilatacao/{cena}`: escolha de modo antes de abrir a cena.
- `#aula/dilatacao/{cena}/professor`: condução do professor.
- `#aula/dilatacao/{cena}/aluno`: participação em aula.
- `#aula/dilatacao/{cena}/autodidata`: estudo individual.

Links antigos sem modo continuam abrindo Dilatação como estudo autodidata.

## Fonte única de conteúdo

`modes.js` contém:

- capítulos que já oferecem modos;
- nomes e descrições dos modos;
- criação das rotas;
- política compartilhada de cada cena;
- separação planejada entre estado coletivo e individual.

O conteúdo continua em `curriculum.js`, `upgrades.js` e `corrections.js`.

## Comportamento dos modos

### Professor

- vê notas privadas de condução;
- pode ocultar e revelar localmente a explicação projetada;
- mantém acesso às respostas e ajudas;
- retorna ao mapa sem perder o modo escolhido.

### Aluno em aula

- vê a cena e manipula as experiências;
- pode registrar alternativas;
- não acessa pistas, gabaritos nem resolução antes da liberação do professor;
- a liberação remota ainda não existe nesta versão local.

### Estudar sozinho

- preserva a experiência anterior;
- oferece pistas, feedback, checklists e resoluções progressivas;
- não depende de professor nem de sessão.

## Decisão sobre dispositivos

Os modos são experiências locais independentes. O projeto não terá sincronização entre tablets, sessão remota, QR Code, código de sala ou controle coletivo de dispositivos. Professor e aluno podem usar seus respectivos modos sem vínculo técnico entre aparelhos.

## Restrições de identidade

A plataforma é um projeto pessoal de **Matheus Moreira**. Não usar nome, logotipo, crédito ou vínculo visual com escola ou rede de ensino.

