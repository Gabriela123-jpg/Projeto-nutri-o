   //pegar o peso
   let pacientes = document.querySelectorAll(".paciente");

   for(var i = 0 ; i< pacientes.length; i++){


    let paciente  = pacientes[i];


	//console.log("falha ao carregar!");            
	let titulo = document.querySelector("#titulo");
 titulo.textContent = "Etecia Nutrição e Dietética";

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
 if(peso<=0 || peso > 1000){
   console.error("peso invalido!");
   pesovalido= false 
   tdimc.textContent="Peso invalido" 
 }

 if (Altura<=0){
  console.error("Altura invalida!");
  alturavalido= false
}

        // escrever o IMC
        if(pesovalido && alturavalido){
        //calcular o imc
        let imc = peso/Altura ** 2;
        let tdimc = paciente.querySelector(".info-imc");
        tdimc.textContent = imc.toFixed(2);
      }
    }



