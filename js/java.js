for (var i = 0 ; i<5; i++){
  console.log(i)
}


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

  
