// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

export class Validator {

    #field;
    #value;
    #required;
    
    constructor(fieldName = '',value = '',required = false)
    {
        this.#field = fieldName;
        this.#value = value;
        this.#required = required;
    }
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