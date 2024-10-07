import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.css'
})
export class GraphicDesignComponent {
  graphicDesignArray = [

    {projectName: "Tim Brown",
      description : "A new cover for Tim Brown's new release 'Change'",
      imageUrl : 'assets/graphic-design-image-1.webp'
    },

    {projectName: "Boxed Water",
      description : "A simple packaging concept made for Boxed Water",
      imageUrl : 'assets/graphic-design-image-2.webp'
    },

    {projectName: "SCIENCE ! ",
      description : "A poster made in collaboration with the Federal Art Project.",
      imageUrl : 'assets/graphic-design-image-3.webp'

    }
    
  ]
}
