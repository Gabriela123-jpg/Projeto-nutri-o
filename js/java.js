	//console.log("falha ao carregar!");            
	let titulo = document.querySelector("#titulo");
   titulo.textContent = "Etecia Nutrição e Dietética";

   //pegar o peso
 let paciente = document.querySelector(".paciente");
 let tdPeso = paciente.querySelector(".info-peso");
 let peso = tdPeso.textContent;
 let pesovalido=true
 //pegar altura
 let tdAltura = paciente.querySelector(".info-altura");
 let Altura = tdAltura.textContent;
 let alturavalido= true
 // calcular imc
  let imc = peso /Altura **2;

  //validar dados
  if(pesovalido$$alturavalida)
   (peso<=0 || peso > 1000){
      console.error("peso invalido!");
    pesovalido= false  
    }
      if (Altura<=0){
        console.error("Altura invalida!");}
        alturavalido= false
        // escrever o IMC
 let tdimc = paciente.querySelector(".info-imc");
 tdimc.textContent = imc;