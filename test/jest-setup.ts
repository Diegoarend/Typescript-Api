//arquivo responsa´vel por inicializar todos os servers para os testes funcionais

import { SetupServer } from '@src/server';
import supertest from 'supertest';

// o beforeall vai rodar antes de todos os testes da aplicação, então ele vai ficar encarregado de inicializar o server de teste
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  //aqui inicializamos o supertest passando a aplicação do express
  //como o typescript não reconhece o tipo de global.testRequest vamos criar esse tipo no arquivo globals.d.ts
  global.testRequest = supertest(server.getApp());
});
