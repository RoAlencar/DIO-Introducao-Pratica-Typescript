"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 3;
unknowValor = 'UEPA';
unknowValor = true;
unknowValor = "vai sim";
let stringTest2 = "agora vai";
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
