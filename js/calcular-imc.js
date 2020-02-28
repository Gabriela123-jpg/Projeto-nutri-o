let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(pacienteTr => {
  let paciente = {
    peso: paciente.querySelector(".info-peso").textContent,
    Altura: paciente.querySelector(".info-altura").textContent
  }
  let tdimc = paciente.querySelector(".info-imc");

  if (!validarPeso(paciente.peso)) {
    tdimc.textContent = " Peso invalido";
    pacienteTr.classList.add("paciente-invalido");
  }
  if (!validarAltura(paciente.Altura)) {
    tdimc.textContent = "Altura invalida";
    pacienteTr.classList.add("paciente-invalido");
  }
  if (!validarPaciente(paciente)) tdimc.textContent = calcularIMC(paciente);

});
function calcularIMC(paciente) {
  let imc = paciente.peso / paciente.altura ** 2;
  return imc.toFixed(2);
}
function validarPeso(peso) {
  return !(peso <= 0 || peso > 1000);
}
function validarAltura(altura) {
  return !(altura <= 0);

}
function validarPaciente(paciente) {
  return (validarPeso(paciente.peso) &&
    validarAltura(paciente.altura)
  );
}


