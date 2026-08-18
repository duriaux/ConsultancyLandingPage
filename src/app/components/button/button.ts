import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

@Input("btn-text") btnText: string = "";

@Input() disabled: boolean = false;
@Input() loading: boolean = false;
@Input() variant: BtnVariants = "primary";

@Output("submit") onSubmit:any = new EventEmitter();

//emit an event
submit(){
  this.onSubmit.emit();
}

}
