# Desafio Tectopólis - Donamaid, Indeorum e Moblize

## Introdução
A indeorum iniciou como uma empresa voltada a serviços de data science aplicados a pós-graduação brasileira.
Por isso, seus três produtos lançados são voltados para esta área (Cientum, Ranquium e Quantum).

## Objetivo do Teste

Como uma startup que iniciou na área da educação, a Indeorum processa grandes quantidades de dados provenientes das plataformas Lattes e Sucupira. Na plataforma Lattes os dados são exportados no formato de XML, no formato do arquivo de exemplo apresentado na seção abaixo.
Sua tarefa será criar uma aplicação MVC em Ruby on Rails que lê arquivos de entrada no formato XML do lattes (como o apresentado), armazena-os em uma base de dados MongoDB e apresenta-os em uma interface no estilo material design (você poderá usar o framework desejado para material, como materialize, material design lite, vuetify e etc).

O projeto deverá conter uma página que liste os pesquisadores inseridos, apresentando seu nome e quantidade de artigos. Esta tela deverá permitir a realização de uma busca nesta lista, buscando pelo nome do pesquisador. 

Qualquer tecnologias/ferramenta/padrões adicionais como VueJS, TDD, testes e etc não são obrigatórios, porém poderão ser considerados extras.

Para a realização do teste, **este repositório deverá ser forkado e o projeto desenvolvido a partir da nova instância.**

O projeto deve conter um breve Readme (formato Markdown) com instruções de instalação e uso.

## Exemplo de Arquivo de Entrada
[Currículo de Exemplo](public/researcher_example.xml)

## Requisitos

- Ruby on Rails Project(MVC)
- Interface Material Design
- Script de carregamento de XML
- Lista pesquisável de pesquisadores com seu nome e quantidadade de artigos
- Utilizar MongoDB
- Controle de versão com GitHub
- Readme com instruções

## Extras

- Funcionalidade para Upload de novos XML para a base
- Utilização de componentes VueJS
- Testes (TDD)
- Boas práticas e padrões de projeto
- Organização e documentação do fluxo de desenvolvimento (um board no trello, asana e etc)


## Entregáveis/Apresentação

Para execução do teste, deverá ser realizado o fork deste repositório e desenvolvido a partir de então.
A entrega deverá ser realizada através do envio do link do repositório para o email até **quinta-feira (07/03/19), as 23:59**.
Na **sexta, dia 08/03/19, às 10h,** será realizada uma etapa presencial consistindo de uma etapa em grupo, além de uma breve apresentação individual do resultado enviado deste teste.

## Dicas e sugestões:

- Nokogiri Gem para parser de xml
- MongoID Gem para interface mongodb <-> ruby 
- GitKraken para controle de versão

## Exemplo de resultado final:
![Imagem exemplo](img/screen_example.png)
