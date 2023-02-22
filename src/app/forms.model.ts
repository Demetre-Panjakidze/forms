import { FormControl } from '@angular/forms';

export enum Occupation {
  Developer = 'Developer',
  Doctor = 'Doctor',
  Actor = 'Actor',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export interface RegisterForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  age: FormControl<number | undefined | null>;
  email: FormControl<string | null>;
  hobbies?: FormControl<string | null>;
  occupation?: FormControl<Occupation | undefined | null>;
  gender: FormControl<Gender | null>;
}
