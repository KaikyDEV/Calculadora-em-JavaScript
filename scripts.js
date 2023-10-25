function somar(){
    var numero1 = document.getElementById("txtNumero1").value;
    var numero2 = document.getElementById("txtNumero2").value;

    var resultadoSomar = parseFloat(numero1) + parseFloat(numero2);

    document.getElementById("txtResultado").value = resultadoSomar;
}

function subtrair(){
    var numero1 = document.getElementById("txtNumero1").value;
    var numero2 = document.getElementById("txtNumero2").value;

    var resultadoSomar = parseFloat(numero1) - parseFloat(numero2);

    document.getElementById("txtResultado").value = resultadoSomar;
}

function multiplicar(){
    var numero1 = document.getElementById("txtNumero1").value;
    var numero2 = document.getElementById("txtNumero2").value;

    var resultadoSomar = parseFloat(numero1) * parseFloat(numero2);

    document.getElementById("txtResultado").value = resultadoSomar;
}

function dividir(){

    var numero1 = document.getElementById("txtNumero1").value;
    var numero2 = document.getElementById("txtNumero2").value;

    if (numero1 == 0 || numero2 == 0){
        alert("Não se divide nenhum número por zero!");
    }

    else{
        var resultadoSomar = parseFloat(numero1) / parseFloat(numero2);

        document.getElementById("txtResultado").value = resultadoSomar;
    }

}