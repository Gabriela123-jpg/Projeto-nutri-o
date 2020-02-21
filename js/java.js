   //pegar o peso
   let pacientes = document.querySelectorAll(".paciente");
//maif facil que usar o FOR ou seja ao inves de usar o for,para cada paciente se coloca FOREACH e diminui o codigo
//função anonima
pacientes.forEach ( function (paciente){
  let peso = paciente.querySelector(".info-peso").textContent;

  let titulo = document.querySelector("#titulo");
  titulo.textContent = "Etecia Nutrição e Dietética";
 //pegar altura
 let Altura = paciente.querySelector(".info-altura").textContent;
 
 let alturavalido= true;
 let pesovalido=true;
 // calcular imc
 let tdimc = paciente.querySelector(".info-imc");
 

 //validar dados
 if(peso<=0 || peso > 1000){
  pesovalido= false;
  tdimc.textContent="Peso invalido" 
  paciente.classList.add("paciente-invalido");
}
if (Altura<=0){
  alturavalido= false
}

        // escrever o IMC
        if(pesovalido && alturavalido){
        //calcular o imc
        let imc = peso/Altura ** 2;
        tdimc.textContent = imc.toFixed(2);
      }
    });
/*
let titulo = document.querySelector("#titulo");
titulo.addEventListener ("click" , mostrarMensagem);
titulo.addEventListener ("click" , trocarCor);

function mostrarMensagem(){
  console.log("evento aconteceu");
}
function trocarCor(){
  let cor = parseInt(Math.random()*255);
  titulo.style.color = "rgb("+cor+","+cor+","+cor+")";
}
*/
let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click" ,function (evento){
  evento.preventDefault();
    //pegar valores da form
    let formulario = document.querySelector("#form-paciente");
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura  = formulario.altura.value;
    let gordura = formulario.gordura.value;
    
    //criar linha
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    //Criar td nome
    let tdNome = document.createElement("td");
    tdNome.textContent = nome;
    table.appendChild(tdNome);

    table.appendChild(tr);

    //Criar td peso

    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    table.appendChild(tdPeso);

    table.appendChild(tr);

    //Criar td altura 

    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    table.appendChild(tdAltura);

    table.appendChild(tr);

    // Criar td gordura
    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    table.appendChild(tdGordura);

    table.appendChild(tr);


    //console.log(tr);

  });




