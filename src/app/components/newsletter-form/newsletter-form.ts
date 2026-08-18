 import { Component, signal } from '@angular/core';
import { Button } from '../button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { NewsletterService } from '../../services/newsletter';
import { error } from 'node:console';

@Component({
  selector: 'app-newsletter-form',
  imports: [Button, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.scss',
})

export class NewsletterForm {

newsLetterForm: FormGroup;
loading=signal(false);

constructor(private service: NewsletterService) {
      this.newsLetterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

onSubmit(){
this.loading.set(true)
if(this.newsLetterForm.valid){
this.service.sendData(this.newsLetterForm.value.name, this.newsLetterForm.value.email).subscribe({
next:() => {
this.newsLetterForm.reset();
this.loading.set(false);
}
})

}//if
}//onSubmit()





}//cls
