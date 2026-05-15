// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:
import {Validator} from "./u1e1.js"

export class NumberValidator extends Validator {
    min;
    max;
    constructor (fieldName, value,required, min,max ){
        super(fieldName ?? "none", value, required)

        this.min = min;
        this.max = max;
    }

    checkNumber(){

       if (typeof this.value !== "number" || Number.isNaN(this.value)){
            return `ERROR_NUMBER. ${this.field} NO es de tipo número o un número válido ${this.value}.`
        }
        

        if (this.max !== undefined && this.value > this.max){

            return `ERROR_MAX. ${this.field} supera el valor máximo asignado.`

        }

        if (this.min !== undefined && this.value < this.min){

            return `ERROR_MIN. ${this.field} no alcanza el valor máximo asignado.`

        }

        return true
    
    }


    isValid(){
        if (this.required && this.isEmpty()){
            return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`
        }

       if (!this.isEmpty()){

        return this.checkNumber()

    }

    return true
    }
}


