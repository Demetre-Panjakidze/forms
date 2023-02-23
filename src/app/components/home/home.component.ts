import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
  ValidationErrors,
  FormBuilder,
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

  get plusBtnDisabled() {
    return this.form.controls.hobbies.length === 5;
  }
  get removeBtnDisabled() {
    return this.form.controls.hobbies.length === 1;
  }

  hobbies: string[] = [
    'Playing chess',
    'hiking',
    'listening to music',
    'reading',
    'smoking',
    'playing football',
    'watching football',
  ];
  form: FormGroup<RegisterForm> = this.buildForm();

  constructor(private fb: FormBuilder) {}

  private buildForm() {
    return this.fb.group<RegisterForm>({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        forbiddenWordsValidator(),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      age: this.fb.control(undefined, [
        Validators.required,
        Validators.min(18),
        Validators.max(100),
      ]),
      email: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [UsedMailValidator()]
      ),
      hobbies: this.fb.array([new FormControl('')]),
      occupation: this.fb.control(null),
      gender: this.fb.control(this.gender.Male),
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form);
  }

  addHobbyControll() {
    const hobbies = this.form.controls.hobbies;
    hobbies.push(new FormControl(''));
  }

  removeHobbyControll(index: number) {
    const hobbies = this.form.controls.hobbies;
    hobbies.removeAt(index);
  }
}
