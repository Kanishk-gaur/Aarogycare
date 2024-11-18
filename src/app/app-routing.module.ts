import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';
import { AyurComponent } from './services/ayur/ayur.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ayur', component: AyurComponent },
  { path: 'service-card', component: ServiceCardComponent },
  
  // Wildcard route
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'top', // This ensures the page always scrolls to the top
      anchorScrolling: 'enabled' // This enables scrolling to anchored elements if any
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
