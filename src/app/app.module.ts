// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RenderComponent } from './render/render.component';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { HospitalCardComponent } from './home/hospital-card/hospital-card.component';
import { CircleCardComponent } from './home/circle-card/circle-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';
import { AyurComponent } from './services/ayur/ayur.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    RenderComponent,
    HomeComponent,
    HomeCardComponent,
    HospitalCardComponent,
    CircleCardComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    ServiceCardComponent,
    AyurvedaComponent,
    AyurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }