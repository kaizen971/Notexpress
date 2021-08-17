/* Initialisation de Vue */
new Vue({
    el: "#app",
    data: {
        // Tableau qui stock toutes les questions qui pourront être sélectionnées pour le QCM
        stockQuestions: [
            {question: "Quelle propriété de Flexbox n'existe pas ?", rightAnswer: "re-flex", wrongAnswer: "flex-basis", wrongAnswer2: "flex-grow", wrongAnswer3: "flex-wrap", numQuestion: 0},
            {question: "Que signifie CSS ?", rightAnswer: "Cascading Style Sheets", wrongAnswer: "Colorful Style Sheets", wrongAnswer2: "Creative Style Sheets", wrongAnswer3: "Computer Style Sheets", numQuestion: 1},
            {question: "Que signifie HTML ?", rightAnswer: "HyperText Markup Language", wrongAnswer: "Home Tool Markup Language", wrongAnswer2: "Hyperlinks and Text Markup Language", wrongAnswer3: "Hyper Tool Markup  Language", numQuestion: 2},
            {question: "Comment fait-on un commentaire en HTML ?", rightAnswer: "<!-- Comme ceci -->", wrongAnswer: "// Comme ceci", wrongAnswer2: "/Comme ceci/", wrongAnswer3: "/*/Comme ceci /*/", numQuestion: 3},
            {question: "Quelle est la balise de citation pour une liste avec numéros ?", rightAnswer: "ol", wrongAnswer: "li", wrongAnswer2: "dt", wrongAnswer3: "ul", numQuestion: 4},
            {question: "Quelle balise de tableau n'existe pas ?", rightAnswer: "tfooter", wrongAnswer: "td", wrongAnswer2: "table", wrongAnswer3: "th", numQuestion: 5},
            {question: "Laquelle de ses balises n'est pas une balise sémantique ?", rightAnswer: "div", wrongAnswer: "section", wrongAnswer2: "figcaption", wrongAnswer3: "aside", numQuestion: 6},
            {question: "Laquelle de ces propriétés CSS n'existe pas ?", rightAnswer: "font-italic", wrongAnswer: "font-family", wrongAnswer2: "font-variant", wrongAnswer3: "font-weight", numQuestion: 7},
            {question: "Quelle valeur de la propriété text-decoration n'existe pas ,", rightAnswer: "hoverline", wrongAnswer: "underline", wrongAnswer2: "overline", wrongAnswer3: "line-through", numQuestion: 8},
            {question: "Quel format d'identifiant est incorrect ?", rightAnswer: "3identifiant", wrongAnswer: "identifiant3", wrongAnswer2: "identifiant_3", wrongAnswer3: "identifiant-3", numQuestion: 9},
            {question: "Comment faire une sélection multiple ?", rightAnswer: "En séparant avec une virgule: h1, h2, h3 {}", wrongAnswer: "En séparant avec un espace: h1 h2 h3 {}", wrongAnswer2: "En séparant avec un point-virgule: h1; h2; h3 {}", wrongAnswer3: "En séparant avec des tirets: h1-h2-h3 {}", numQuestion: 10},
            {question: "On veut sélectionner uniquement les éléments p descendants direct d'un article, pour cela on écrit:", rightAnswer: "article > p {}", wrongAnswer: "article p {}", wrongAnswer2: "article:p {}", wrongAnswer3: "article.p {}", numQuestion: 11},
            {question: "Quelle balise utilise-t-on pour insérer du Javascript sur une page HTML ?", rightAnswer: "<scrip>", wrongAnswer: "<scripting>", wrongAnswer2: "<js>", wrongAnswer3: "<javascript>", numQuestion: 12},
            {question: "Quel événement se déclenche quand l'utilisateur clique sur un élément HTML ?", rightAnswer: "click", wrongAnswer: "mouseover", wrongAnswer2: "mouseclick", wrongAnswer3: "change", numQuestion: 13},
            {question: "Comment afficher 'Bonjour' dans une boite de dialogue en Javascript ?", rightAnswer: "alert('Bonjour')", wrongAnswer: "write('Bonjour')", wrongAnswer2: "print('Bonjour')", wrongAnswer3: "echo('Bonjour')", numQuestion: 14},
            {question: "En Javascript, avec quoi peut-on faire référence à l'objet courant ?", rightAnswer: "this", wrongAnswer: "&", wrongAnswer2: "#", wrongAnswer3: "->", numQuestion: 15},
        ],
        questions: [], // Tableau contenant toutes les questions du QCM
        nbQuestions: 5, // Nombre de questions du QCM
        reponses: [], // Tableau contenant toutes les réponses validées par l'utilisateur grâce au bouton
        checked: "", // Variable pour récupérer la réponse sélectionné
    },
    /* Randomisation des questions au chargement de la page */
    beforeMount() {
        this.randomize();
    },

    methods: {
        /* On récupére les réponses de l'utilisateur au clique du bouton */
        getReponse(index) {
            //Objet qui contient la réponse de l'utilisateur
            let obj = {
                numeroQuestion: index,
                value: checked
            }
            this.colored(); //fonction permettant de colorier l'indicateur des questions
            this.reponses.push(obj); //On insert l'objet contenant la réponse dans le tableau des réponses
            console.log(this.reponses)
        },

        /* Fonction qui permet d'ajouter la classe qui colore le fond en vert */
        colored() {
            let indicator = document.querySelector(".carousel-indicators li.active");
            indicator.classList.add("colorValidation");
        },

        /* Fonction qui permet de rendre cliquable le bouton dès qu'on choisit une des réponses possibles */
        enableButton(){
            let radio = document.querySelectorAll(".carousel-item.active .form-check-input"); // On sélectionne toutes les réponses de la question qui est affichée
            let button = document.querySelector(".carousel-item.active .btn-outline-success"); // On sélectionne le bouton

            //On vérifie si une des réponses a été sélectionné en parcourant le tableau contenu dans la variable radio
            for(let i=0; i < radio.length; ++i){
                // Si une des réponses est sélectionné, on active le bouton
                if(radio[i].checked){
                    button.disabled = false;
                }
            }
        },

        /* Fonction qui permet de "randomiser" les questions à chaque chargement de page */
        randomize(){
            let stockQuestionsTemp = this.stockQuestions; // On copie le tableau avec le stock de questions dans une nouvelle variable
            // On boucle nbQuestions(5 dans ce cas) fois sur la copie du tableau pour sélectionner nbQuestions(5 dans ce cas) questions
            for(let i=this.nbQuestions ; i > 0; --i){
                let random = Math.floor(Math.random() * stockQuestionsTemp.length); // On génère un nombre aléatoire
                this.questions.push(stockQuestionsTemp[random]); // On ajoute la question avec l'indice aléatoire dans le tableau de questions déclaré dans data
                stockQuestionsTemp.splice(random, 1); // On retire la question qui a été ajouté pour ne pas avoir de doublons
            }
        },

        /* Fonction pour récupérer la valeur de la réponse sélectionnée */
        onChange(event) {
            var data = event.target.value; // On récupère la valeur
            checked = data; // On la stock dans la variable checked déclaré dans data
        }
    }
});

