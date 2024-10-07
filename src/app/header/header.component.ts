import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isShown = false

  toggleVisibility(){
    const optionsEl = document.getElementById('optionsEl') as HTMLDivElement 

    this.isShown = !this.isShown

    
  }
}
