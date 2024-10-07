import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import {FormGroup} from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  
  reactiveForm : FormGroup 

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      phone : new FormControl(null, Validators.required),
      message : new FormControl(null, Validators.required)
    })
  }


  get name() { return this.reactiveForm.get('name'); }
  get email() { return this.reactiveForm.get('email'); }
  get phone() { return this.reactiveForm.get('phone'); }
  get message() { return this.reactiveForm.get('message'); }
    
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


  onFormSubmit(){
    console.log(this.reactiveForm);
    this.reactiveForm.reset()
    alert('Thank you for sending a message!')
  }


}
