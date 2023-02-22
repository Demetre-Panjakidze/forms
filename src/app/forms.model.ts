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
  firstName: string;
  lastName: string;
  age: number | undefined;
  email: string;
  hobbies?: string;
  occupation?: Occupation;
  gender: Gender;
}
