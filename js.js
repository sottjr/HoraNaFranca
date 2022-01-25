function calcFuso() {
    inHoraBrasil = document.getElementById("inHoraBrasil");
    outHora = document.getElementById("outHora")

    let =  horaBrasil = Number(inHoraBrasil.value);

    //se nao preencheu o campo hora no brasil
    if (inHoraBrasil.value == "" ||isNaN(horaBrasil)) {
        alert("Informe a hora no Brasil corretamente!");
        inHoraBrasil.focus();
        return
    }
    let horaFranca = horaBrasil + 5;

    //se passar da 24 horas
    if(horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    outHora.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcFuso);