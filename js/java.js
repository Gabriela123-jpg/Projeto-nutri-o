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

