import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

// import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAu_ecgGd-j73ue_VWxh3_GSjed9zqdx8g',
      libraries: ['places']
    }),
    AppRoutingModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
