import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auth } from '../../services/auth';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})


export class Button {
// handing ctt val over to "btn-text/btnText"
// btn-test string receives val then hands
// val over to btnText var
@Input("btn-text") btnText: string = "";

// disabled property is flipping to
// true on click. preventing double-submitting
@Input() disabled: boolean = false;

// Btn dynamic ctt as var val
@Input() loading: boolean = false;

// Btn dynamic styling as var val
@Input() variant: BtnVariants = "primary";

// Event btn
@Output("submit") onSubmit = new EventEmitter<void>();

constructor(private auth: Auth){}

//emit an event
submit(){
  this.onSubmit.emit();
  this.disabled = true;

  this.auth.login().subscribe({
next:(res) => {
this.disabled = false;
},
error: (error) {
this.disabled = false;
}

  });


}

}


/*🔓That string inside the decorator
 * is an alias, Spider! Here is why that
 * pattern is being used:
The Secret of the Alias
When you write @Output("submit"), you are
giving the parent component a specific
name to listen for(ser detectado) in its HTML template.

    The Alias ("submit"): This is what
    the parent component sees. In the
    parent's HTML, it will look like
    this:
    HTML

    <app-my-form (submit)="handleMySubmit()">
    </app-my-form>

    The Property Name (onSubmit): This
    is what you use inside your TypeScript
    class (this.onSubmit.emit()).

Why do this?

It allows you to keep a clean internal
naming convention in your TypeScript
file (like prefixing event emitters with
descriptive names) while exposing a clean,
standard event name (submit) to whoever
consumes your component.
🧹 One Tiny Cleanup Opportunity:

If you want to sweep away a tiny
TypeScript "stain" here, look at :any. Using
any bypasses type checking. If you know what
data (if any) is coming through with the
submit event, you can type it strictly,
like this:

TypeScript

@Output("submit") onSubmit = new
EventEmitter<void>(); // Or
// EventEmitter<DataType> if sending data


1. new EventEmitter<void>()

    What it is: This creates a new event channel (a custom event emitter) attached to your component.

    The <void> part: This is a TypeScript generic type specifying that this specific event doesn't carry any data payload when it fires. It's just a signal saying "Hey, something happened!" (compared to something like <string> which would carry text data across the emitter).

2. this.onSubmit.emit()

    What it is: This is the trigger switch.
    When your submit() method runs, calling
    .emit() fires the signal down that
    channel.
    fire it down -> enviar por

    How it connects: Because of the
     @Output("submit") decorator on top,
      any parent component listening to
      this child component's custom
      (submit) event will catch that
       trigger and execute its own bound/vinculante
        function.
SKY>
Are you wiring up this form component
to talk back/respond to your parent
container?*

----------------------------------------
Becoming btn clickable after sometime

path1>
submit() {
  this.disabled = true; // Lock on click

  this.authService.login().subscribe({
    next: () => {
      this.disabled = false; // Unlock when response comes back success
    },
    error: () => {
      this.disabled = false; // Unlock if it fails so they can try again
    }
  });
}

path2>

// locking the btn on click
submit(){
this.disabled
}

// unlocking the btn
setTimeout(() => {
  this.disabled = false;
  },2000)
*/


