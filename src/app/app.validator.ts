import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, map } from 'rxjs';

const forbiddenWords: string[] = ['cudisityva1', 'cudisityva2', 'cudisityva3'];

export function forbiddenWordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return forbiddenWords.includes(control.value)
      ? { isUnsafe: control.value }
      : null;
  };
}

const alreadyUsedEmails: string[] = [
  'dpanj2021@agruni.edu.ge',
  'demetrepanjakidze1@gmail.com',
  'demmepanjakidze@gmail.com',
];

class ApiService {
  checkUsedEmail(email: string): Observable<boolean> {
    return new Observable((observer) => {
      if (alreadyUsedEmails.includes(email)) {
        observer.next(true);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }
}

export function UsedMailValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const apiService = new ApiService();
    return apiService.checkUsedEmail(control.value).pipe(
      map((isUsed) => {
        return isUsed ? { isUsed } : null;
      })
    );
  };
}
