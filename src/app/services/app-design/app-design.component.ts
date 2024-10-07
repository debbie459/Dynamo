import { Component } from '@angular/core';

@Component({
  selector: 'app-app-design',
  standalone: true,
  imports: [],
  templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.css'
})
export class AppDesignComponent {
  appDesignArray = [

    {projectName: "AIR FILTER",
      description : "Solving the problem of poor indoor air quality by filtering the air.",
      imageUrl : 'assets/app-design-image-1.webp'
    },

    {projectName: "EYE CAM",
      description : "Products that let you edit your favourite pictures and photos at any time.",
      imageUrl : 'assets/app-design-image-2.webp'
    },


    {projectName: "FACEIT",
      description : "Get to meet your favourite internet superstar with the FaceIt app",
      imageUrl : 'assets/app-design-image-3.jpg'
    },

    {projectName: "TODO ",
      description : "A todo app that feautures cloud sync with light and dark modes.",
      imageUrl : 'assets/app-design-image-4.jpg'

    },

    {projectName: "Loop Studios ",
      description : "A VR experience app made for loop studios.",
      imageUrl : 'assets/app-design-image-5.jpg'

    }
    
  ]

}
