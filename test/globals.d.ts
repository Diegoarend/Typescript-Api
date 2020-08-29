//esse arquivo vai ser carregado automaticamente pelo ts
//vamos sobrescrever os tipos da interface Global do NodeJS para adicionar o método testRequest que criamos
//não podemos importar o supertest no início, pois o type iria reconhecer o mesmo como um módulo local
//assim vamos precisar fazer esse import inline

declare namespace NodeJS {
  interface Global {
    //aqui importamos o tipo Supertest e fazemos um typeassign para supertest.Test
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
