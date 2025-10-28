const p  = document.createElement("p");

p.textContent = "Olá, mundo!";

document.body.appendChild(p);//Cria um parágrafo e insere de forma segura.

//Se você possuir um ID, basta trocar o texto:
document.querySelector("#mensagem").textContent = "Novo texto na Tela!";