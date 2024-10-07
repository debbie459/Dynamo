import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { WebDesignComponent } from "../web-design/web-design.component";
import { RouterOutlet } from '@angular/router';
import { GetInTouchComponent } from "../../get-in-touch/get-in-touch.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, WebDesignComponent, RouterOutlet, GetInTouchComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
