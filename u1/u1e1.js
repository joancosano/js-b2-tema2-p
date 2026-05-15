// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

<<<<<<< HEAD

export class Validator{
    #field;
    #value;
    #required;

    constructor(fieldName = "",value = "",required = false){
=======
export class Validator {

    #field;
    #value;
    #required;
    
    constructor(fieldName = '',value = '',required = false)
    {
>>>>>>> refs/remotes/origin/main
        this.#field = fieldName;
        this.#value = value;
        this.#required = required;
    }
<<<<<<< HEAD

    get field(){
        return this.#field
    }

    set field(fieldName){
        this.#field = fieldName
    }

    get value(){
        return this.#value
    }

    set value(newValue){
        this.#value = newValue
    }
    
    get required(){
        return this.#required
    }

    set required(isRequired){
        this.#required = isRequired
    }

   isEmpty() {
    return this.#value === ""

    }
    
    isValid(){
        return (this.#value || this.#required != true) ? true : false 

    }

}
=======
    get field(){
        return this.#field
    }
    set field(name){
        this.#field = name;
    }
    get value(){
        return this.#value
    }
    set value(value){
        this.#value = value;
    }

    get required(){
        return this.#required
    }
    set required(required){
        this.#required = required;
    }
    isEmpty(){
        return this.#value === '';
    }
    isValid(){
        return !this.isEmpty() || !this.required;
    }

}
>>>>>>> refs/remotes/origin/main
