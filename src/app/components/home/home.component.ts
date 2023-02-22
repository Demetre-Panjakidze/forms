import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import {
  forbiddenWordsValidator,
  UsedMailValidator,
} from 'src/app/app.validator';
import { RegisterForm, Gender, Occupation } from 'src/app/forms.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  occupation = Occupation;
  gender = Gender;
  isSubmitted: boolean = false;

  form: FormGroup = this.buildForm();

  constructor() {}

  private buildForm() {
    return new FormGroup<RegisterForm>({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        forbiddenWordsValidator(),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      age: new FormControl(undefined, [
        Validators.required,
        Validators.min(18),
        Validators.max(100),
      ]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        [UsedMailValidator()]
      ),
      hobbies: new FormControl(''),
      occupation: new FormControl(undefined),
      gender: new FormControl(this.gender.Male),
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form);
  }
}
