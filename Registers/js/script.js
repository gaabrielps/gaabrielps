

class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ]


    }

    //iniciar a validação de todos os campos 

    validate(form) {
        //pegar os imputs
        let inputs = form.getElementsByTagName('input');
        console.log(inputs)

        // transforma o htmlcollection - > array

        let inputsArray = [...inputs];
        console.log(inputsArray)

        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function (input) {

            //loop em todas as validações existentes
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) != null) {
                    console.log(input.getAttribute(this.validations[i]));
                    console.log('ACHOU');
                }



            }
        }, this);
    }




    

}

let form = document.getElementsByClassName("register");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//evento que dispara as validações
submit.addEventListener('click', function (e) {
    e.preventDefault();

    validator.validate(form);



});


