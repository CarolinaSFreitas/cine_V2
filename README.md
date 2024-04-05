# 🎥 CineClube

- o ``for=""`` vira ``htmlFor=""``
- como a barra de pesquisa não fica sempre na tela, o componente de pesquisa (Search.tsx) vai no arquivo "page.tsx" ao invés do "layout.tsx". O componente de navbar (Title.tsx) fica no "layout.tsx" porque ele é fixo nas telas
- ``lg:text-6x`` ou ``md:text-5xl`` é para outras mídias que não são mobile. O Tailwind é mobile-first (``text-6xl``)
- pra ativar o menu-burguer e outras coisas que precisam do JavaScript, pra facilitar, adiciona o cdn do script antes do ``<body>`` no arquivo "layout.tsx"
----------------------------------------------

- Se der algum problema na hora de rodar: ``npm i`` || ``npm install next`` 
- Adicionando o arquivo da api, não esquecer de fazer o ``npm i`` pra instalar as dependências 

# A API de Filmes - 28/03

A API na pasta "api-next":
- porta alterada para 3001 no "app.js"
- a porta do banco é 3001 no arquivo "database > conecta_db.js"
- no MySQL (``mysql -u aluno -p``) criei o banco pra api (api_next)
- instalar o cors ``npm i cors``
- ``npx nodemon app`` no diretório da api pra iniciar a api_next

----------------------------------------------
- no MySQL (``mysql -u aluno -p``) criei o banco pra api (api_next)
- instalar o cors ``npm i cors``
- ``npx nodemon app`` no diretório da api pra iniciar a api_next

## Relembrando:
Pra incluir os dados dos filmes na api pelo insomnia:
- <método> na url: http://localhost:3001/filmes
![image](https://github.com/CarolinaSFreitas/cineclube-1403/assets/99994934/f1db77e6-a889-4190-b98e-ba2a7d9bfbef)
Pra listar:
- <método> na url: http://localhost:3001/filmes
![image](https://github.com/CarolinaSFreitas/cineclube-1403/assets/99994934/03d87819-db55-4fcc-be9b-36a0bdad6c6f)

# Mais notas em cada pasta de front, back ou insomnia 
