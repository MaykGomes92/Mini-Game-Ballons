const btnInit = document.querySelector("#btnInit");
const btnExit = document.querySelector("#btnExit");
const btnPause = document.querySelector("#btnPause");

let dificuldade;
let score = 0;
let sel = document.querySelector("#sel");

let pontosTotal = document.querySelector("#pontosTotal");
let pontosRecorde = document.querySelector("#pontosRecorde");

function criarBaloes() {
  function estourarBalao() {
    score = score + 12;
    window.localStorage.setItem("score", score);
    pontosTotal.innerHTML = score;
    let estouroBalao = new Audio("balao-estouro.mp3");
    return estouroBalao.play();
  }

  const imgB = "ballonBlue.png";
  const divEnterBaloes = document.querySelector(".baloes");

  let criarImg = document.createElement("img");
  let criarDiv = document.createElement("div");
  criarDiv.setAttribute("class", "divBall");

  criarImg.setAttribute("class", "ball");
  criarImg.src = imgB;

  // POSICIONAMENTO DOS BALÕES

  let widthDiv = divEnterBaloes.clientWidth;
  let heightDiv = divEnterBaloes.clientHeight;
  let header = document.querySelector("#header");
  let heiHeader = header.clientHeight;

  criarImg.style.left = `${Math.random() * (widthDiv - 10) + 10}px`;
  criarImg.style.top = `${
    Math.random() * (heightDiv - heiHeader) + heiHeader
  }px`;

  criarDiv.appendChild(criarImg);
  divEnterBaloes.appendChild(criarDiv);

  // REMOVER BALÕES
  criarImg.addEventListener("click", () => {
    divEnterBaloes.removeChild(criarDiv);
    estourarBalao();
  });
}

let pegarScore = window.localStorage.getItem("score");
pontosRecorde.innerHTML = pegarScore;

let intervalo;

const divEnterBaloes = document.querySelector(".baloes");


btnInit.addEventListener("click", () => {
  if (sel.value === "facil") {
    divEnterBaloes.style.background = 'linear-gradient(80deg,#0092C5,#0D90AE';
  } else if(sel.value === 'medio'){
    divEnterBaloes.style.background = 'linear-gradient(80deg,#005C8B,#006B9F)';
  } else if(sel.value ==='dificil'){
    divEnterBaloes.style.background = 'linear-gradient(80deg,#005284,#106085)';
  }



  if (sel.value === "dificuldade") {
    alert("Selecione uma dificuldade");
    return;
  } else {
    if (sel.value == "facil") {
      dificuldade = 1000;
    } else if (sel.value == "medio") {
      dificuldade = 800;
    } else {
      dificuldade = 500;
    }
    intervalo = setInterval(() => {
      criarBaloes();
    }, dificuldade);
  }
});

btnExit.addEventListener("click", () => {
  let baloes = document.querySelector(".baloes");
  clearInterval(intervalo);
  baloes.innerHTML = "";
  window.location.reload()
});

btnPause.addEventListener("click", () => {
  clearInterval(intervalo);
});
