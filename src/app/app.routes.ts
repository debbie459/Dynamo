import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services/services.component';
import { WebDesignComponent } from './services/web-design/web-design.component';
import { AppDesignComponent } from './services/app-design/app-design.component';
import { GraphicDesignComponent } from './services/graphic-design/graphic-design.component';

export const routes: Routes = [
    {path:"", component : HomeComponent},
    {path: "company", component:CompanyComponent},
    {path:"locations", component:LocationComponent},
    {path:"contact", component:ContactComponent},
    {path:"services", component:ServicesComponent, children : [
        {path:"Web-Design", component:WebDesignComponent},

        {path:"App-Design", component:AppDesignComponent},

        {path:"Graphic-Design", component:GraphicDesignComponent}
    ]}
];

