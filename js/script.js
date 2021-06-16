// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà
//  una bici
//  da corsa con le seguenti proprietà: nome e peso. Stampare
//  a schermo la bici con peso minore utilizzando destructuring
//   e template literal


const biciclette = [
    {   nome : "tundem",
        peso : 39,
    },

    {   nome : "harry",
        peso : 30,
    },

    {
        nome: 'stigatsby',
        peso: 20,
    }

];

let bici = biciclette[0];
for(let i = 1; i < biciclette.length; i++){
    if(biciclette[i].peso < bici.peso){
        bici = biciclette[i];
    }
}

console.log(bici);

const {nome,peso} = bici;

document.getElementById('bici').innerHTML = 
`
<ul>
    <li> ${nome}</li>
    <li> ${peso}kg</li>
</ul>
`;

// Snack2 Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, 
// punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: 
// Punti fatti e falli subiti. (Utilizzate le arrow function). 
// Infine usando la destrutturazione creiamo un nuovo array i 
// cui elementi sono sempre degli oggetti 
// che contengono solo nomi e falli subiti. Stampiamo tutto in console.

const squadre = [
    {nome : 'Inter', punti: 0, falli: 0},
    {nome : 'Milan', punti: 0, falli: 0},
    {nome : 'Juventus', punti: 0, falli: 0},
    {nome : 'verona', punti: 0, falli: 0},
    {nome : 'napoli', punti: 0, falli: 0},
    {nome : 'sassuolo', punti: 0, falli: 0}
];

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const array = [];

for(let i=0; i<squadre.length; i++){
    let{nome,falli} = squadre[i];
    falli = random(1,5);
    array.push({nome,falli});
}

console.log(array);
