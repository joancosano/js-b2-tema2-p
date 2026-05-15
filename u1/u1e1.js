// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:


export class Validator{
    #field;
    #value;
    #required;

    constructor(fieldName = "",value = "",required = false){
        this.#field = fieldName;
        this.#value = value;
        this.#required = required;
    }

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
