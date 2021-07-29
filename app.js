// Création d'un composant qu'on va pouvoir réutiliser plus rapidement



/*const cards = [
  
  {
   title:"gramaire",
   question:"question1",
   flipped: false,
  
  
  },
  {
    title:"vocabulaire",
   question:"question2",
    flipped: false,
  }





];*/   // Exemple d'un tableau objet

let cards;
if (localStorage.getItem("testJSON")==null){ // Si le localStorage est vide , retourner un tableau vide
   cards = [
  
 ]
} 
else{ // sinon retourner le tableau présent dans le cache. 
  let text = localStorage.getItem("testJSON"); /* Récupere le cache ayant la clé "testJson" */
   cards = JSON.parse(text); /* Convertie le JSon(en format text) en objet(format objet) */
  
  
}


// On instancie Vue
// On vise la div générale du html pour initialiser le projet avec Vue
let app = new Vue({
    el: '#app',
    // Les données qu'on utilisera dans les objets. 
    data: { 
      question: '',
      reponse: '',
      cards: cards,
      
     
    },

    // Ici seront contenues toutes les fonctions de l'appli
    methods: {
      
      save: function(){ // Sauvegarde une fiche grâce au input dans le cache.
        
        let questionInput = document.querySelector('#question'); /* Récupere la variable présent dans le input de réponse*/
        let reponseInput = document.querySelector('#reponse') /* Récupere la variable présent dans le input de question*/
        
        let objet = { /* Création d'un objet */
          
          
          
          question: questionInput.value,

          reponse : reponseInput.value,
          
          flipped: false /* Important pour le flippe de la carte */
          
        }
          
          
        cards.push(objet); /* Ajout dans le tableau l'objet */
        
         
         
         const myJSON = JSON.stringify(cards); 
          localStorage.setItem("testJSON", myJSON); /* Convertie en JSON avec la key "testJSON" */
        
      },
      
     toggleCard: function(card) { // Changement de classe d'un élement objet cards. Switch entre flipped et !flipped
        card.flipped = !card.flipped
       
      },
      
      Clear:function(){ // Supression du cache .
        
        localStorage.removeItem("testJSON");
        
      }
      
      
      
    }
    
});



