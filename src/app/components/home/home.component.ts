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
  hobbies: any[] = [];

  get plusBtnDisabled() {
    return this.form.controls.hobbies.length === 5;
  }
  get removeBtnDisabled() {
    return this.form.controls.hobbies.length === 1;
  }

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

  private handleOccupation(occupation: Occupation | null | undefined) {
    switch (occupation) {
      case Occupation.Developer: {
        this.form.addControl('developerOf', this.fb.control(''));
        this.form.removeControl('managerOf');
        break;
      }
      case Occupation.Manager: {
        this.form.addControl('managerOf', this.fb.control(''));
        this.form.removeControl('developerOf');
        break;
      }
      case Occupation.Actor: {
        this.form.removeControl('managerOf');
        this.form.removeControl('developerOf');
        break;
      }
    }
  }

  ngOnInit() {
    this.form.controls.occupation.valueChanges.subscribe((occupation) => {
      this.handleOccupation(occupation);
    });
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
