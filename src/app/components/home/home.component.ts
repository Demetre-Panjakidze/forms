import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterForm } from 'src/app/forms.model';
import { Occupation } from 'src/app/forms.model';
import { Gender } from 'src/app/forms.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  occupation = Occupation;
  gender = Gender;

  onSubmit() {
    // if (form.invalid) {
    //   return;
    // }
    // console.log('all good, Result:', form);
  }
}
