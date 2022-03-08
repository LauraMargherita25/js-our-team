/* ---CONSEGNA--- */

/* Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team. */


/* ---RECAP & BRAINSTORMING--- */

/* mi conviene forse usare un array di oggetti */
/* e poi usare un ciclo while per stampare tutti gli oggetti */

/* const arrTeamMembers = [
    {
    name: 'un nome',
    role: 'un lavoro'
    }
] */

// console.log(teamMembers.name);    // per stampare il valore di name con il punto
// console.log(teamMembers['name']); // per stampare il valore di name con le[]


// per stampare tutte le propietà dell'oggetto
/* for (const key in teamMembers) {  
    console.log(teamMembers[key]);
} */ 


// per stampare  il valore di un oggetto dentro un array
// console.log(arrTeamMembers[0].name)


/* ---SVOLGIMENTO--- */

const eleName = document.getElementById("name");
const eleRole = document.getElementById("role");
const eleProfilePhoto = document.getElementById("image");
const btnAddTeamMember = document.getElementById("addMemberButton");

// creo un array di obj, uno per ogni elemento del team
const arrTeamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: '../img/wayne-barnett-founder-ceo.jpg'
    },
    
    {
        name: 'Angela Carrol',
        role: 'Chief Editor',
        img: '../img/angela-caroll-chief-editor.jpg'
    },
    
    {
        name: 'Walter Gordon',
    role: 'Office Manager',
    img: '../img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: '../img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: '../img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: '../img/barbara-ramos-graphic-designer.jpg'
    },

];



btnAddTeamMember.addEventListener('click', getNewMember);


function getNewMember() {

    objNewMember = {
        name: eleName.value,
        role: eleRole.value,
        img: eleProfilePhoto.value
    }

    arrTeamMembers.push(objNewMember);

    // creo un ciclo per stampare una card per ogni nuovo elemetno del team
    for (let i = 0; i < arrTeamMembers.length; i++) {

        // creo la card
        const eleTeamContainer = document.querySelector('.team-container');
        const eleTeamCard = document.createElement("div");
        eleTeamCard.classList.add('team-card');
        eleTeamContainer.append(eleTeamCard);


        // creo la sezione per l'img
        const eleCardImg = document.createElement("div");
        eleCardImg.classList.add('card-image');
        eleTeamCard.append(eleCardImg);

        const eleImg = document.createElement("img");
        eleImg.src = arrTeamMembers[i].img;
        eleCardImg.append(eleImg);
        

        // creo la sezioe per il testo
        const eleCardText = document.createElement("div");
        eleCardText.classList.add('card-text');
        eleTeamCard.append(eleCardText);

        const userName = document.createElement("h3");
        userName.innerHTML = arrTeamMembers[i].name;
        eleCardText.append(userName);

        const userRole = document.createElement("p");
        userRole.innerHTML = arrTeamMembers[i].role;
        eleCardText.append(userRole);
    }
} 

// creo un ciclo per stampare una card per ogni nuovo elemetno del team
for (let i = 0; i < arrTeamMembers.length; i++) {

    // creo la card
    const eleTeamContainer = document.querySelector('.team-container');
    const eleTeamCard = document.createElement("div");
    eleTeamCard.classList.add('team-card');
    eleTeamContainer.append(eleTeamCard);


    // creo la sezione per l'img
    const eleCardImg = document.createElement("div");
    eleCardImg.classList.add('card-image');
    eleTeamCard.append(eleCardImg);

    const eleImg = document.createElement("img");
    eleImg.src = arrTeamMembers[i].img;
    eleCardImg.append(eleImg);
    

    // creo la sezioe per il testo
    const eleCardText = document.createElement("div");
    eleCardText.classList.add('card-text');
    eleTeamCard.append(eleCardText);

    const userName = document.createElement("h3");
    userName.innerHTML = arrTeamMembers[i].name;
    eleCardText.append(userName);

    const userRole = document.createElement("p");
    userRole.innerHTML = arrTeamMembers[i].role;
    eleCardText.append(userRole);
}
console.log(arrTeamMembers)








