import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
interface SocialMedia{
socialNetwork: string,
url:string,
icon: string
}

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

currentYear = new Date().getFullYear();

socials:SocialMedia[] = [
{socialNetwork:'Instagram', url:"https://instagram.com", icon: "assets/insta.png"},
{socialNetwork:'Facebook',url:"https://facebook.com", icon:"assets/face.png"}
]



}
