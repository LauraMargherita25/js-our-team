/* Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team. */


/* mi conviene forse usare un array di oggetti */
/* e poi usare un ciclo while per stampare tutti gli oggetti */

const arrTeamMembers = [
    {
    name: 'un nome',
    role: 'un lavoro'
    }
]

// console.log(teamMembers.name);    // per stampare il valore di name con il punto
// console.log(teamMembers['name']); // per stampare il valore di name con le[]


// per stampare tutte le propietà dell'oggetto
/* for (const key in teamMembers) {  
    console.log(teamMembers[key]);
} */ 


// per stampare  il valore di un oggetto dentro un array
// console.log(arrTeamMembers[0].name)