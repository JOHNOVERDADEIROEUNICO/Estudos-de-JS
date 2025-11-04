//Como foi dito no caderno, classes são ,EM JAVASCRIPT, o mesmo que functions, somente a sintaxe muda, agora as classes de outras linguagens como c# e Java, funcionam de maneira diferente como foi dito no caderno.
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const p = new Pessoa("João");
p.falar(); // "Olá, meu nome é João"
