	//console.log("falha ao carregar!");            
	let titulo = document.querySelector("#titulo");
   titulo.textContent = "Etecia Nutrição e Dietética";

   //pegar o peso
 let paciente = document.querySelector(".paciente");
 let tdPeso = paciente.querySelector(".info-peso");
 let peso = tdPeso.textContent;
 //pegar altura
 let tdAltura = paciente.querySelector(".info-altura");
 let Altura = tdAltura.textContent;
  // calcular imc
  let imc = peso /(Altura * Altura);
  console.log(imc)