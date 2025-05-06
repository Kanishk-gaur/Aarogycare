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
  // Основной маршрут
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ayur', component: AyurComponent },
  { path: 'service-card', component: ServiceCardComponent },
  
  // Маршрут для несуществующих путей
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'top', // Это гарантирует, что страница всегда будет прокручиваться до верха
      anchorScrolling: 'enabled' // Это позволяет прокручивать до закрепленных элементов, если они есть
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
