import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

/*

gOptimizedImage is a directive.

Here is what that means for your code:

    How you use it: Instead of rendering its own custom HTML
    layout like a component would, it acts as an attribute
    directive that enhances the native HTML <img> tag (you use
    it by swapping src for ngSrc).

    What it does: It automatically handles performance best
    practices like intelligent lazy loading, generating srcset
    for responsive sizing, and preventing layout shifts.

    */


}
