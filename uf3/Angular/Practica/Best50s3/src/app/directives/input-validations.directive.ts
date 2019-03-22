import { Directive } from '@angular/core';
//import need to make the directives work
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Key } from 'protractor';

@Directive({
  selector: '[inputMinLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: InputValidationsDirective, multi: true }]

})
export class InputValidationsDirective implements Validator {

  constructor() { }
/*
  this method will recibe the control to validate (fromFielToValidate)
  devolvera una tupla que puede ser true o false para personalidad los errores de las field

  name: Validate
  description:this method will recibe the control to validate and will perform all the validations
  needed over
  @params: fromFielToValidate AbstractControl
         formFielToValidate will be the DOM component that will have the directive applied
  @return: the function will return an object containg the errors of the validatios or null
          in case there aren`t
  @date: 01-02-19
  @author: Ainhoa Lopez
*/
  validate(formFielToValidate: AbstractControl): { [Key: string]: any } {

    let validInpput: boolean = false;



    //primero me valida que no este vacio
    if (formFielToValidate.value != undefined && formFielToValidate.value.length >= 6) {

      validInpput = true;
    }

    //en el caso de qye todo sea correcto devuelve null y si esta mal devuelve el mensaje
    return validInpput?null:{'isNotCorrect':true};


  }

}
