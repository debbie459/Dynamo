import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  socialIcons = [
    "assets/icon-facebook.svg",
    "assets/icon-twitter.svg",
    "assets/icon-pinterest.svg",
    "assets/icon-youtube.svg",
    "assets/icon-instagram.svg",
  ]
}
