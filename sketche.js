let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de Recomendadofantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(1568, 10, 921));
  textAlign(CENTER, CENTER);
  textSize(70);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "peter pan";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Toy Story";          
        } else{
         return "Hotel Transilvânia";
        }
      } else {
        if (gostaDeFantasia) {
          return "A Noiva-Cadáver";
        } else {
          return "Bob Esponja - O Filme";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Gato de Botas";
    } else {
      return "Lilo & Stitch";
    }
  }
}
