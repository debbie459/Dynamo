import { Component } from '@angular/core';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.css'
})
export class WebDesignComponent {

  webDesignArray = [

    {projectName: "Express",
      description : "A multicarrier shipping website for e-commerce businesses",
      imageUrl : 'assets/web-design-image-1.webp'
    },

    {projectName: "TRANSFER",
      description : "Site for low-cost transfer and sening money within seconds",
      imageUrl : 'assets/web-design-image-2.webp'
    },

    {projectName: "Photon",
      description : "A state of the art music player with high resolution audio and DSP eefects.",
      imageUrl : 'assets/web-design-image-3.webp'

    },

    {projectName: "BUILDER",
      description : "Connects builders with local contractors based on their location",
      imageUrl : 'assets/web-design-image-4.webp'
    },

    {projectName: "BLOGR",
      description : "Blogr is a platform for creating online blogs and publications.",
      imageUrl : 'assets/web-design-image-5.webp'
    },

    {projectName: "CAMP",
      description : "Get expert training in coding, data, design and digital marketing.",
      imageUrl : 'assets/web-design-image-6.webp'
    },
    
  ]
}
