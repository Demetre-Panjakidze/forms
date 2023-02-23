import { FormArray, FormControl } from '@angular/forms';

export enum Occupation {
  Developer = 'Developer',
  Manager = 'manager',
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
  hobbies: FormArray<FormControl<string | null>>;
  occupation: FormControl<Occupation | undefined | null>;
  gender: FormControl<Gender | null>;
  developerOf?: FormControl<string | null>;
  managerOf?: FormControl<string | null>;
}
