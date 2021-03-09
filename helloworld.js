"use strict";
var verdadeiro; // false ou true
var numeros; // todos os numéricos
var palavras; // caracteres
var qualquer; // qualquer tipo como no js, por default será tipo any no ts
var nunca; // tipagem para código inacessivel, como uma função lançada throw
var desconhecida; // tipo ainda indefinido como o any, mas que garante que será validada tipagem antes do uso
var vazio; // tipagem vazia quando não terá retorno
function numberStringSwap(value) {
    if (typeof value === 'string') {
        return parseInt(value);
    }
    else if (typeof value === 'number') {
        return String(value);
    }
}
var num = numberStringSwap('1234');
var str = numberStringSwap(1234);
console.log(num);
console.log(str);
