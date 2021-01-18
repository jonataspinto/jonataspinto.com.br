---
date: 2020-11-18 14:17:00
title: REST API com Express e Firebase cloud-functions.
description: Construindo apis com firebase functions.
category: FullStack
background: "#7AAB13"
image: /assets/img/express-firebase.png
---


Se você trabalha com Front-end e costuma desenvolver aplicações SPA com algum Framework javascript tipo ReactJs, Angular, VueJs… então certamente já teve que integrar com algum banco de dados, e uma das melhores alternativas para tal seria o uso de bancos não relacionais por serem de fácil implementação. uma das alternativas que corresponde ao que precisamos de maneira bem robusta é o Firebase, que nos possibilita usar seus recursos direto na web.

![exemplo de integração direto na web.](/assets/img/1_n5glhucvzlthnvznm0qf5w.png "exemplo de integração direto na web.")

certamente é uma solução muito boa mas começa a ficar ruim quando temos que executar validações, realizar autenticação e etc, pois estaremos lidando com muitas regras de negócio na camada *Front-End*, e se for uma aplicação que tende a escalar, isso começa a se tornar um verdadeiro caos! dentro do *Firebase* temos um recurso chamado *Cloud Function*s que nos permite fazer chamadas *Http* executando um servidor *nodeJS* e para essa demostração usaremos o *express*.

* Primeiramente crie uma conta no *F[irebase](https://firebase.google.com/?hl=pt-br&gclid=EAIaIQobChMI5_ulwuGg7AIViInICh0SRwFAEAAYASAAEgIhQPD_BwE)* e logo em seguida crie um novo projeto.
* Instale o *firebase-tools* globalmente.\
  `npm install -g firebase-tools`
* Abra o terminal na pasta do seu projeto e faça login com na sua conta google com a cli do F*irebase*.\
  `firebase login`
* Agora basta iniciar seu projeto *functions*.\
  `firebase init functions`

``

![como já criamos um projeto no console do Firebase, usaremos um projeto existente.](/assets/img/1_-45errszaor29avdrdxpxa.png "Exemplo console firebase-cli")

Selecione o projeto que criou e as opções de desenvolvimento *ex: javascript, typescript, Eslint* e por ultimo se deseja instalar todas as dependências com o gerenciador sugerido pelo *Firebase*. para o exemplo estarei utilizando *javascript, Eslint e npm* como gerenciador.\
\
Ao abrir seu projeto no *vscode* ele deve ser mais ou menos assim:\
\`\``

functions/

  node_modules/

  .eslintrc.json

  .gitignore

  index.js

  package-lock.json

  package.json

  .firebaserc

  .gitignore

  firebase.json

\`\``\
\
 não entrarei em detalhes sobre sua estrutura mas posso adiantar que se alterarmos o projeto não executa.

Navegue para a pasta *functions*.\
`cd functions`

Faça a instalação do express para podermos começar a escrever nossa função.\
`npm install express --save`\
``\
No seu index.js adicione o seguinte:

```javascript
const functions = require('firebase-functions');
const server = require('./src/server');

const api = functions.https.onRequest(server);

module.exports = {api};
```

\
Crie uma pasta `src` e adicione dois arquivos `server.js` e `routes.js` .

```javascript
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json())
    .use(routes)
    .get('*', (request, response) => {
      response.json({message: "invalid route"})
    })

module.exports = app;
```



```javascript
const router = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

const routes = new router()

const userCollection = 'users';

routes.post('/users', async (request, response) => {
  const { name, email } = request.body;
  const user = {
    name,
    email,
  };
  console.log(user)
  try {
    const newDoc = await db.collection(userCollection).add(user);
    response.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
      response.status(400).send(`User should cointain name and email!!!`)
  }
});

routes.get('/users', async (request, response) => {
  try {
    const userQuerySnapshot = await db.collection(userCollection).get();
    const users = [];
    userQuerySnapshot.forEach(
        (doc)=>{
          users.push({
          id: doc.id,
          data:doc.data()
        });
        }
    );
    response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = routes;
```



Feito isso basta rodar o projeto no terminal dentro do diretório *functions*.\
`npm run serve`

que vai gerar uma url local que será exibida no seu terminal:

![ex: functions[api]: http function initialized (http://localhost:5001/tenorius-aefd1/us-central1/api).](/assets/img/1_sfmhvt8.png "exemplo console build")

\
Com essa url já podemos testar nossa api usando softwares específicos para requisições como por exemplo: *[insomnia](https://insomnia.rest/download/)* , *[postman](https://www.postman.com/downloads/)*, ou executar diretamente com *fetch-api* em um *front-end* (opção mais trabalhosa).

* Crie um *workspace* para seu projeto e adicione as duas requisições que criamos. Mas\
  antes de testarmos precisamos voltar no console do *Firebase* para criar um banco de dados.
* Navegue até *Cloud Firestore* e crie um banco de dados e selecione a opção: `iniciar no modo teste` (pois não estamos implementando autenticação).
* feito isso podemos executar as chamadas para nossa api!

fechando o *CRUD* vamos implementas as rotas `DELETE e PUT` .

```javascript
const router = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

const routes = new router()

const userCollection = 'users';

routes.post('/users', async (request, response) => {
  const { name, email } = request.body;
  const user = {
    name,
    email,
  };
  try {
    const newDoc = await db.collection(userCollection).add(user);
    response.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
      response.status(400).send(`User should cointain name and email!!!`)
  }
});

routes.get('/users', async (request, response) => {
  try {
    const userQuerySnapshot = await db.collection(userCollection).get();
    const users = [];
    userQuerySnapshot.forEach(
        (doc)=>{
          users.push({
          id: doc.id,
          data:doc.data()
        });
        }
    );
    response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

routes.delete('/users/:userId', (request, response) => {
  const { userId } = request.params;

  db.collection(userCollection).doc(userId).delete()
  .then(()=> (
    response.status(204)
    .send("Document successfully deleted!")
  ))
  .catch((error) => {
    response.status(500)
    .send(error);
  });
})

routes.put('/users/:userId', async (request, response) => {
  const { userId } = request.params;
  
  await db.collection(userCollection)
  .doc(userId)
  .set(
    request.body,
    {merge:true}
  )
  .then(()=> (
    response.json({
      id:userId
    })
  ))
  .catch((error)=> (
    response.status(500)
    .send(error)
  ))
});

module.exports = routes;
```

\
Para termos um link de produção precisamos configurar uma conta de faturamento no console do *Firebase*. `configurações > utilização e faturamento > detalhes e configurações > modificar plano.` selecione o plano *Blaze* e preencha com dados necessários. Feito isso, basta executar o seguinte comando no diretório *functions*:\
`npm run deploy` 🎊 🎉\
\
Integrando todos os serviços oferecidos pelo Firebase dentre eles autenticação, push-email, realtime database, google analytics, storage… 😵 😵 conseguimos ter uma aplicação bem completa e robusta. para ter acesso ao código fonte siga o [link](https://github.com/jonataspinto/tenorius-rest-api) para o repositório. 💻

Abraço e até a próxima!