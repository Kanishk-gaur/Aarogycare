// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  
  // Default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Wildcard route
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }