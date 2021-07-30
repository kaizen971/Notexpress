
new Vue({
    el: "#app",
    data: {
        stockQuestions: [
            {question: "Quelle propriété de Flexbox n'existe pas ?", rightAnswer: "re-flex", numQuestion: 0},
            {question: "Que signifie CSS ?", rightAnswer: "Cascading style sheets", numQuestion: 1},
            {question: "Que signifie HTML ?", rightAnswer: "HyperText markup language", numQuestion: 1}
        ],
        questions: [
            
        ],
        reponses: [],
        checked: "",
    },

    beforeMount() {
        this.randomize();
    },

    methods: {
        getReponse(index) {
            let obj = {
                numeroQuestion: index,
                value: checked
            }
            this.colored();
            this.reponses.push(obj);
        },

        colored() {
            let indicator = document.querySelector(".carousel-indicators li");
            indicator.classList.add("colorValidation");
        },

        /*showReponse(){
            console.log(this.reponses);
        },*/

        /*enableButton(){
            let formCheck = document.querySelectorAll(".form-check-input");
            let button = document.querySelector(".btn-outline-success");
            console.log(formCheck)
            for(let item in formCheck){
                if(item.checked === true){
                    button.disabled = "";
                }else{
                    button.disabled = "disabled";
                }
            }
            
        },*/

        randomize(){
            let stQu = this.stockQuestions;
            for(let i=0; i < this.stockQuestions.length; ++i){
                let random = Math.floor(Math.random() * this.stockQuestions.length);
                this.questions.push(stQu[random]);
            }
        },

        onChange(event) {
            var data = event.target.value;
            checked = data;
        }
    }
});

