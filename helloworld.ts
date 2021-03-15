// TIPOS PRIMITIVOS

let verdadeiro: boolean; // false ou true
let numeros: number; // todos os numéricos
let palavras: string; // caracteres
let qualquer: any; // qualquer tipo como no js, por default será tipo any no ts
let nunca: never; // tipagem para código inacessivel, como uma função lançada throw
let desconhecida: unknown; // tipo ainda indefinido como o any, mas que garante que será validada tipagem antes do uso
let vazio: void; // tipagem vazia quando não terá retorno

function numberStringSwap(value: unknown): unknown { // tipo de recebimento e retono qualquer
    if (typeof value === 'string') { // typeof busca o tipo do valor any
        return parseInt(value); // converte de string para number
    }
    else if (typeof value === 'number') {
        return String(value); // converte de number para string
    }
}
 
// console.log(numberStringSwap('sadas') + 1) Erro, por conta de tentar ser usado um tipo unknown somando a um number

let teste: any = 2;
teste.toString()

let teste2: unknown = '';
let teste3: unknown = '';
// console.log(teste2 as string + teste3)

const num = <number> numberStringSwap('1234'); // sintaxe assim como as para conversão de tipo <number>
// 1234

const str = numberStringSwap(1234) as string; // sintaxe preferencial para conversão de tipos, as string
// '1234'


// TIPOS DE OBJETO

let geo: { // criado um tipo objeto
    lat: number;
    lon: number;
};
 
geo = { lat: 0, lon: 0 };
// OK, mesmas propriedades

// geo = { lat: 'zero', lon: 0 };
// Erro, tipo da propriedade `lat` está errado

// geo = { lat: 0 };
// Erro, faltando propriedade `lon`

// geo = { lat: 0, lon: 0, z: 0 };
// Erro, atribuição literal deve contar apenas propriedades declaradas

const otherGeo = { lat: 0, lon: 0, z: 0 };
geo = otherGeo;
// OK, propriedades extras não são relevantes para atribuição não literal


let geo2: { lat: number; lon: number; };
// let geo3: { lat: number; lon: number; };
let geo3: typeof geo2 // o mesmo que a linha acima, é assumido como tipo de geo3 o tipo de obj do geo2


interface Geo { // como no exemplo acima, mas fazendo o uso de interfaces, nomeando tipos de obj
    lat: number;
    lon: number;
}

let geo4: Geo = { lat: 0, lon: 0 } ; // podemos deixar o tipo Geo agora nomeado em várias variaveis somente por seu nome


interface Geo3D extends Geo { // podemos extender de uma outra interface para acrescentar mais variaveis a tipagem
    z: number
}

let geo5: Geo3D = { lat: 0, lon: 0, z: 0 };

interface GeoOptional { // nova tipagem possuindo 3 parâmetros
    lat: number;
    lon: number;
    z?: number; // parametro opcional (?)
}

// let opt: GeoOptional = { lat: 0 } Erro, faltante do parametro lon: 0
let opt: GeoOptional = { lat: 0, lon: 0 }
let opt2: GeoOptional = { lat: 0, lon: 0, z: 0}


interface Example { // nova tipagem possuindo 3 parâmetros
    lat: number;
    lon: number;
    z?: number; // parametro opcional (?)
    toString: Function;
}

function toString(): string {
    return 'teste'
}

// let teste90: Example = { lat: 0, lon: 0, toString: toString}

// Object TypeScript 2.2+

let newObject: object
let newObject2: Object

// newObject = '' Error, Type 'string' is not assignable to type 'object'.
newObject = { }   // Aceita somente objetos

newObject2 = true // Aceita primitivos 
newObject2 = {}   // E objetos

// FUNÇÕES

interface FunctionExample {
    x: number;
    y: number;
    z?: number;
    toGeo: () => FunctionExample;
}

let printPoint: (point: FunctionExample) => string;

// Função pode ser tipada com o uso de new na frente da mesma
let Example: { new (): FunctionExample; };
let Igual: new () => FunctionExample;

// SOBRECARREGADA

// Funções que possuem mesmo nome mas assinaturas diferentes
function sobrecarregada(value: number, radix?: number): string;
function sobrecarregada(value: string): number;
function sobrecarregada(value: any, radix: number = 10): any {
    if (typeof value === 'string') {
        return parseInt(value, radix);
    }
    else if (typeof value === 'number') {
        return String(value);
    }
}

// GENERICOS

function genericPrintString<T>(value: T): string {
    return String(value)
}

// console.log(genericPrintString(true)) 'true'

function genericPrintString2<T = string>(value: T): string {
    // return value + 3 Error, T deve extender de string
    // return value + true
    // return value + {}
    return value + 'teste'
}

// console.log(genericPrintString2(12))  '12teste'
 
// UNIÃO

// É possível fazer uma espécie de genérico limitado, limitando união de tipos
function unionPrint(element: string | boolean): string | boolean {
    if (typeof element === 'string') {
      return element
    }
    else {
      return element;
    }
}

// console.log(unionPrint('teste')) 'teste'
// console.log(unionPrint(false)) false
// console.log(unionPrint(1)) Error, Argument of type '1' is not assignable to parameter of type 'string | true'.ts(2345)

function unionPrint2(element: string | true | number | any): string { 
    return element 
}

function unionPrint3<T = string | number>(value: T | boolean): T | boolean {
    // return value + 3 Error, T deve extender de string
    // return value + true
    // return value + {}
    return value
}

// INTERSECÇÃO

interface Inter {
    name: string;
    count: number;
}
 
interface Gremio {
    name: string;
    age: number;
}
 
export type Grenal = Inter & Gremio;

// cuidados com tipos duplicados

interface InterDuplicate {
    count: string;
}
 
interface GremioDuplicate {
    count: number;
}
 
export type GrenalDuplicate = InterDuplicate & GremioDuplicate;
/* GrenalDuplicate.count é do tipo `string & number` */

// let testee: GrenalDuplicate = { count: ''} Error, Type 'string' is not assignable to type 'never'.

// MAPEADOS

// Transforma os tipos do T recebido em string
type Stringify<T> = {
    [P in keyof T]: string;
};
 
interface Point { x: number; y: number; }
 
// transformação
type StringPoint = Stringify<Point>;
 
const pointA: StringPoint = { x: '4', y: '3' };
// válido
