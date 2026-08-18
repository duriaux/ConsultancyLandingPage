import { Component } from '@angular/core';
import { Header } from "../header/header";
import { NgOptimizedImage } from "@angular/common";
import { Button } from "../button/button";
import { NewsletterForm } from "../newsletter-form/newsletter-form";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  standalone : true, // modules
  imports: [Header, NgOptimizedImage, Button, NewsletterForm, Footer],        // the things that will be used
  providers:[],
  templateUrl: './home.html', // path from html
  styleUrl: './home.scss',   // path from scss
})
export class Home {}
