import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterLink } from '@angular/router';
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, GetInTouchComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

  constructor(private router: Router){}

  viewProjects(title:string){
    this.router.navigate(['/services', title])
  }


  serviceArray = [
    {
      imgUrl: 'assets/web-services-mobile-img.jpg',
      title: 'Web-Design'
    },
    {
      imgUrl: 'assets/image-app-design.jpg',
      title: 'Graphic-Design'
    },
    {
      imgUrl: 'assets/image-graphic-design.jpg',
      title: 'App-Design'
    }
  ];

  serviceArrayTab = [
    {
      imgUrl: 'assets/image-web-design-tablet.jpg',
      title: 'Web-Design'
    },
    {
      imgUrl: 'assets/image-graphic-design-tab.jpg',
      title: 'Graphic-Design'
    },
    {
      imgUrl: 'assets/image-app-design-tab.jpg',
      title: 'App-Design'
    }
  ];

  serviceArrayDesktop = [
    {
      imgUrl: 'assets/web-desgn-desktop-image large.jpg',
      title: 'Web-Design'
    },
    {
      imgUrl: 'assets/image-app-design.jpg',
      title: 'Graphic-Design'
    },
    {
      imgUrl: 'assets/image-graphic-design.jpg',
      title: 'App-Design'
    }
  ];
   
  valuesArray = [
    {
      imgUrl: 'assets/illustration-passionate.svg',
      title: 'Passionate',
      text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
    },

    {
      imgUrl: 'assets/illustration-resourceful.svg',
      title: 'Resourceful',
      text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
    },

    {
      imgUrl: 'assets/illustration-friendly.svg',
      title: 'Friendly',
      text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
    }
  ];
  
}
