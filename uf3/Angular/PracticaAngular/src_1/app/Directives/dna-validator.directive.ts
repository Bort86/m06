import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

var dna_code = new RegExp("[^ACGT]", "i");

@Directive({
  selector: '[DnaValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DnaValidatorDirective, multi: true}]
})
export class DnaValidatorDirective implements Validator{

  constructor() { }

  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = true;

    let dnaseq = formFieldToValidate.value;
    for (let i = 0; i < dnaseq.length; i++) {
      if (dna_code.test(dnaseq[i].value)){
        validInput = false;
      }
    return validInput?null:{'IsNotCorrect': true};

    }
  }
}
