// CONSEGNA - Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: 
// - nome
// - ruolo 
// - foto

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

		
// creazione dell'array di oggetti 
let objectArray = [ 

    {
        name: "Wayne Barnett" ,	 	
        role: "Founder & CEO" , 
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll" ,	 	
        role: "Chief Editor" , 
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon" ,	 	
        role: "Office Manager" , 
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez" ,	 	
        role: "Social Media Manager" , 
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada" ,	 	
        role: "Developer" , 
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos" ,	 	
        role: "Graphic Designer" , 
        photo: "barbara-ramos-graphic-designer.jpg" 
    }

]

// stampa in console dei dati richiesti 
for(let i = 0; i < objectArray.length; i++){ 
    console.log(objectArray[i].name)
    console.log(objectArray[i].role)
    console.log(objectArray[i].photo)

    let cardContainer = document.getElementById("card-container")

    cardContainer.innerHTML += `
        <div class="card col" style="width: 18rem;">
            <img src="./assets/img/${objectArray[i].photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${objectArray[i].name}</h5>
                <p class="card-text">${objectArray[i].role}</p>
            </div>
        </div>
    `

}

