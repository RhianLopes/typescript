"use strict";
// TIPOS PRIMITIVOS
Object.defineProperty(exports, "__esModule", { value: true });
var verdadeiro; // false ou true
var numeros; // todos os numéricos
var palavras; // caracteres
var qualquer; // qualquer tipo como no js, por default será tipo any no ts
var nunca; // tipagem para código inacessivel, como uma função lançada throw
var desconhecida; // tipo ainda indefinido como o any, mas que garante que será validada tipagem antes do uso
var vazio; // tipagem vazia quando não terá retorno
function numberStringSwap(value) {
    if (typeof value === 'string') { // typeof busca o tipo do valor any
        return parseInt(value); // converte de string para number
    }
    else if (typeof value === 'number') {
        return String(value); // converte de number para string
    }
}
// console.log(numberStringSwap('sadas') + 1) Erro, por conta de tentar ser usado um tipo unknown somando a um number
var teste = 2;
teste.toString();
var teste2 = '';
var teste3 = '';
// console.log(teste2 as string + teste3)
var num = numberStringSwap('1234'); // sintaxe assim como as para conversão de tipo <number>
// 1234
var str = numberStringSwap(1234); // sintaxe preferencial para conversão de tipos, as string
// '1234'
// TIPOS DE OBJETO
var geo;
geo = { lat: 0, lon: 0 };
// OK, mesmas propriedades
// geo = { lat: 'zero', lon: 0 };
// Erro, tipo da propriedade `lat` está errado
// geo = { lat: 0 };
// Erro, faltando propriedade `lon`
// geo = { lat: 0, lon: 0, z: 0 };
// Erro, atribuição literal deve contar apenas propriedades declaradas
var otherGeo = { lat: 0, lon: 0, z: 0 };
geo = otherGeo;
// OK, propriedades extras não são relevantes para atribuição não literal
var geo2;
// let geo3: { lat: number; lon: number; };
var geo3; // o mesmo que a linha acima, é assumido como tipo de geo3 o tipo de obj do geo2
var geo4 = { lat: 0, lon: 0 }; // podemos deixar o tipo Geo agora nomeado em várias variaveis somente por seu nome
var geo5 = { lat: 0, lon: 0, z: 0 };
// let opt: GeoOptional = { lat: 0 } Erro, faltante do parametro lon: 0
var opt = { lat: 0, lon: 0 };
var opt2 = { lat: 0, lon: 0, z: 0 };
function toString() {
    return 'teste';
}
// let teste90: Example = { lat: 0, lon: 0, toString: toString}
// Object TypeScript 2.2+
var newObject;
var newObject2;
// newObject = '' Error, Type 'string' is not assignable to type 'object'.
newObject = {}; // Aceita somente objetos
newObject2 = newObject; // Aceita primitivos 
newObject2 = {}; // E objetos
newObject2 = newObject;
var printPoint;
// Função pode ser tipada com o uso de new na frente da mesma
var Example;
var Igual;
// SOBRECARREGADA Não tem > 1.4
// Funções que possuem mesmo nome mas assinaturas diferentes
// function sobrecarregada(value: string, radix: number): string {
//     return value;
// }
// function sobrecarregada(value2: number, radix2: string): string {
//     return '';
// }
// sobrecarregada(1, 1)
// sobrecarregada(1, 'a')
// GENERICOS
function genericPrintString(value) {
    return String(value);
}
// console.log(genericPrintString(true)) true
// console.log(genericPrintString(() => {})) function () { }
function genericPrintString2(value) {
    // return value + 3 Error, T deve extender de string
    // return value + true
    // return value + {}
    return value + 'teste';
}
// console.log(genericPrintString2(null))
// console.log(genericPrintString2(() => {}))
// UNIÃO
// É possível fazer uma espécie de genérico limitado, limitando união de tipos
function unionPrint(element) {
    if (typeof element === 'string') {
        return element;
    }
    else {
        return element;
    }
}
// console.log(unionPrint('teste')) 'teste'
// console.log(unionPrint(false)) false
// console.log(unionPrint(1)) Error, Argument of type '1' is not assignable to parameter of type 'string | true'.ts(2345)
function unionPrint2(element) {
    return element;
}
function unionPrint3(value) {
    // return value + 3 Error, T deve extender de string
    // return value + true
    // return value + {}
    return value;
}
var bla = { batata: 'batatinha', batata2: 1 };
var blo = '';
var ble = unionPrint3(bla);
var bli = { name: '', count: 1, age: 1, name2: '' };
console.log(bli);
var pointA = { x: '4', y: '3' };
// válido
