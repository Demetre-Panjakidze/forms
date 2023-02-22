import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm, Gender, Occupation } from 'src/app/forms.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  occupation = Occupation;
  gender = Gender;

  form: FormGroup = this.buildForm();

  constructor() {}

  private buildForm() {
    return new FormGroup<RegisterForm>({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      age: new FormControl(undefined, [
        Validators.required,
        Validators.min(3),
        Validators.max(10),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      hobbies: new FormControl(''),
      occupation: new FormControl(undefined),
      gender: new FormControl(this.gender.Male),
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    console.log(this.form);
  }
}
