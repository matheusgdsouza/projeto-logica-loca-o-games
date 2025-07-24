// OBJETIVO DO PROJETO: Ao clicar no botão ALUGAR, alterar para DEVOLVER e vice e versa.
/*
function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");

    if(botao.classList.contains("dashboard__item__button--return")){
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        imagem.classList.remove("dashboard__item__img--rented");
    } else {
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
    }
}
*/
function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");

    if(botao.classList.contains("dashboard__item__button--return")){
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        imagem.classList.remove("dashboard__item__img--rented");
    } else {
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
    }
}




