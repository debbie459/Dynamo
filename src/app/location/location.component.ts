import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [HeaderComponent, GetInTouchComponent, FooterComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

}
