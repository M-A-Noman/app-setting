import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-chips',
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.scss']
})
export class CustomChipsComponent implements OnInit {
  @Input('controls')customChipsFormGroup:FormGroup;
  faX=faX;
  constructor() { }

  ngOnInit(): void {
    const defaultControl = this.customChipsFormGroup.get('default');
    if (defaultControl) {
      defaultControl.setValidators([this.emailValidator()]);
      defaultControl.updateValueAndValidity();  
    }
  }

  addChip(){
    const chip=this.customChipsFormGroup.value['default'].trim();
    if(chip&&this.customChipsFormGroup.valid &&this.customChipsFormGroup.value['option']&&!this.customChipsFormGroup.value['option'].includes(chip)){
      this.customChipsFormGroup.value['option'].push(chip);
      this.customChipsFormGroup.get('default')?.setValue('')
      console.log(this.customChipsFormGroup)
      this.customChipsFormGroup.markAsUntouched;
    }
  }
  removeChip(index:number){
    if (this.customChipsFormGroup.value['option'].length > index) {
      this.customChipsFormGroup.value['option'].splice(index, 1);  
      this.customChipsFormGroup.get('option')?.markAsDirty();
    }
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const valid = emailRegex.test(control.value);
      return valid ? null : { invalidEmail: true };
    };
  }
}
