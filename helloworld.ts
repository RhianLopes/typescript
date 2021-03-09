// TIPOS PRIMITIVOS

let verdadeiro: boolean; // false ou true
let numeros: number; // todos os numéricos
let palavras: string; // caracteres
let qualquer: any; // qualquer tipo como no js, por default será tipo any no ts
let nunca: never; // tipagem para código inacessivel, como uma função lançada throw
let desconhecida: unknown; // tipo ainda indefinido como o any, mas que garante que será validada tipagem antes do uso
let vazio: void; // tipagem vazia quando não terá retorno



function numberStringSwap(value: any): any { // tipo de recebimento e retono qualquer
    if (typeof value === 'string') { // typeof busca o tipo do valor any
        return parseInt(value); // converte de string para number
    }
    else if (typeof value === 'number') {
        return String(value); // converte de number para string
    }
}
 
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

// point = { lat: 'zero', lon: 0 };
// Erro, tipo da propriedade `lat` está errado

// point = { lat: 0 };
// Erro, faltando propriedade `lon`

// point = { lat: 0, lon: 0, z: 0 };
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
