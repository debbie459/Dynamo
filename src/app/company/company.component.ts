import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, GetInTouchComponent, RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  locationArray = [
    {
      imgUrl: 'assets/illustration-canada.svg',
      name : 'Canada'
    },

    {
      imgUrl: 'assets/illustration-australia.svg',
      name : 'Australia'
    },

    {
      imgUrl: 'assets/illustration-united-kingdom.svg',
      name : 'United Kingdom'
    },

    
  ]
}
