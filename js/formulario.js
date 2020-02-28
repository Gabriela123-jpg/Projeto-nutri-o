let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    Let formulario = document.querySelector("#form-paciente");
    Let paciente = carregarPaciente(formulario);
    Let mensagem = document.querySelector("#mensagem-erro");

    if (paciente){
        montarTr(paciente);
        formulario.reset();
        mensagem.textContent = "";
    
    }else {
        mensagem.textContent= "dados inválidos";
    }
});

function montarTr(paciente){
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(montarTd(paciente.nome, "info-nome"));
    tr.appendChild(montarTd(paciente.peso, "info-peso"));
    tr.appendChild(montarTd(paciente.altura, "info-altura"));
    tr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montarTd(calcularIMC(paciente)));

    table.appendChild(tr);
}

function montarTd(valor, classe){
    let td = document;createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}
 
function carregarPaciente(form) {
    Let paciente = {
        nome: form.nome.valoe,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,

    }
    if (!validarPeso(paciente.peso)) return false; 
    if (!validarAltura(paciente.altura)) return false;
    if (paciente.nome.length< 2) return false;
    
    return paciente;
}