# BackendServidor
Servidor Backend - Situação Desafiadora:

Uma empresa  precisa desenvolver uma pequena aplicação para auxiliar no controle de seu inventário de patrimônio, o problema mencionado é: atualmente os registros dos itens são mantidos de forma manual, dificultando a inclusão, consulta, alteração e exclusão das informações.
Para solucionar esse problema, a equipe de desenvolvimento decidiu criar um backend simples de gerenciamento de inventário, responsável por disponibilizar operações de CRUD (Create, Read, Update e Delete).
Nesta primeira versão do sistema, não será necessário utilizar um banco de dados. Os dados deverão ser armazenados temporariamente em um arquivo JSON, simulando uma base de dados.
O backend deverá disponibilizar uma API capaz de receber requisições HTTP e realizar as operações necessárias sobre os registros de inventário.

# Instruções para a instlação
1. Crie uma pasta e abra no VScode (Crie a pasta normalmente, abra no Git Bash e digite "code .")
2. Crie um arquivo server.js dentro de uma pasta "servidor"
3. O arquivo "server.js" deve conter
```JSON
const express = require("express")
const cors = require("cors")

//Funções e códigos auxiliares, tipo: autoIncrement, totais, cálculos...

//Controllers CRUD [create, read, update, delete]
const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

//Configurações do servidor
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const porta = 3000

//Rotas REST [post, get, put, patch, delete]
app.get('/', rotaInicial)

//Porta de entrada do servidor e saída do console
app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})

```
4. Abra o terminal do VSCode e digite os comandos para iniciar o projeto e instalar as dependências
```JSON
npm init -y
npm i express cors
```
5. Abra o arquivo package.json alterando os campos
"name":"nome_projeto",
"main":"server.js"
Adicionar o script:
"dev": "node --watch server.js"

```JSON
{
  "name": "nome_do_projeto",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "dev": "node --watch server.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "wellifabio",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.2.1"
  }
}
```
6. Execute o servidor
```JSON
npm run dev
```
7. O resultado aparecerá no terminal assim
```JSON
Servidor respondendo em: http://localhost:3000
```
8. Quando for clicar no link, segure CTRL, então aparecerá
```JSON
"Back-end respondendo"
```
9. Crie um arquivo .gitignore contendo
```JSON
node_modules
package-lock.json
```

# Tecnologias 

VScode
Node.js
JavaScript
JSON


