function mascara_cpf() {
    var cpf = document.getElementById('cpf_digitado')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += '.';
    } else if (cpf.value.length == 11) {
        cpf.value += '-';
    }
}

function isValidCPF(cpf) {
    cpf = cpf.replace(/\.|-/g, "");
    console.log(cpf.length);


    if (
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);
        //se a operacao for igual a 0. % eh mod (resto)
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // capturando o resto da variavel soma
        //validacao do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        //validacao do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;

    }
}

function validacao() {
    console.log("Funcao de validacao")

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = isValidCPF(cpf)

    if (resultadoValidacao) {
        var element = document.getElementById('result');
        element.innerHTML = '<h4>CPF VALIDO!</h4>'
        var colorText = document.getElementById('result').style.color = "#53ff3cf3";
    } else {
        var element = document.getElementById('result');
        element.innerHTML = '<h4>CPF INVALIDO!</h4>'
        var colorText = document.getElementById('result').style.color = "#f00000f3";
    }

}

