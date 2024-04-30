function calcularImc(){
    var nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value );
}
if (isNaN(peso) || isNaN(altura)) {
    alert("por favor, insira valores numéricos para peso e altura.");
    return;

}


////////////////////////////////////////////////

// calculo de imc

////////////////////////////////////////////////

if (imc < 18.5) {
    classificacao = "magreza";
    
}