// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:
import {Validator} from "./u1e1.js"

export class EmailValidator extends Validator{
    constructor(fieldName = "none", value = "") {
        super(fieldName ?? "none", value)
    }
    
    checkEmailAddress(){
        const regex = /^[^@]+@[^@.]{2,}\.[^@.]{2,}$/;
        return regex.test(this.value) 
        ? true
        : `ERROR_EMAIL.${this.field} NO es una dirección de correo válida.` 
        }

        isValid(){
            if (this.required && this.isEmpty()){
                return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`
            }
            if (!this.isEmpty()){
                return this.checkEmailAddress();
            }
            return true
        }
}
