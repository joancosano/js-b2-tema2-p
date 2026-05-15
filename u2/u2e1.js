// T2. Trabajo experto con clases
// U2. Polimorfismo
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

import {EmailValidator} from "../u1/u1e2.js"
import {NumberValidator} from "../u1/u1e3.js"


export class FormValidator {
    #fieldList
    
    constructor(){
        this.#fieldList = [];
    }
    
    addField(object){

        if (!(object instanceof EmailValidator) && !(object instanceof NumberValidator))
            {
            return `ERROR_TYPE. The object's type to be added is not supported.`
        }

        const duplicated = this.#fieldList.some(item => item.field === object.field)

        if (duplicated){
            return `ERROR_DUPLICATE. Ya existe un campo con el nombre ${object.field}`
        }

        this.#fieldList.push(object)

        return true
    }

    removeField(fieldName){
        this.#fieldList = this.#fieldList.filter(item => item.field !== fieldName)
    }

    nFields(){
        return this.#fieldList.length
    }

    validate(){

        if (this.#fieldList.length === 0){
            return `ERROR_EMPTY. El formulario no dispone de campos a validar`
        }

        for (const item of this.#fieldList){
            const result = item.isValid();
            
            if (result !== true){
                return result
            }
        }

        return true
    }
}