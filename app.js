// Création d'un composant qu'on va pouvoir réutiliser plus rapidement




Vue.component('category-part', {
  data: function() {
    return {
      categ: [
        {category: "People"},
        {category: "Architecture"},
        {category: "Food"},
        {category: "Art"},
        {category: "Travel"}
      ]
    }
  },
  template: `<div><div class="category" v-for="cat in categ">
              <p>{{ cat.category }}</p>
            </div></div>`
})

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





];*/

let cards;
if (localStorage.getItem("testJSON")==null){
   cards = [
  
 ]
}
else{
  let text = localStorage.getItem("testJSON");
   cards = JSON.parse(text);
  
  
}


// On instancie Vue
// On vise la div générale du html pour initialiser le projet avec Vue
let app = new Vue({
    el: '#app',
    // Les données, aussi appelées état de l'application vont être contenues dans un autre objet
    data: {
      title: '',
      question: '',
      cards: cards,
      
     
    },

    // Ici seront contenues toutes les fonctions de l'appli
    methods: {
      
      save: function(){
        
        let titleInput = document.querySelector('#title');
        let questionInput = document.querySelector('#question')
        
        let objet = {
          
          title : titleInput.value,
          
          question: questionInput.value,
          
          flipped: false
          
        }
          console.log(objet);
          
        cards.push(objet);
        
         
         
         const myJSON = JSON.stringify(cards);
          localStorage.setItem("testJSON", myJSON);
        
      },
      
     toggleCard: function(card) {
        card.flipped = !card.flipped
        console.log("lancement");
      },
      
      Clear:function(){
        
        localStorage.removeItem("testJSON");
        
      }
      
      
      
    }
    
});

