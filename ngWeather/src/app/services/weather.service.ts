import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class WeatherService {
  private apiKey: string;
  constructor(public http: HttpClient) {
    this.apiKey = '144ca248e6b758857d36ba15a0203ebd';
   }

   public getWeather(city?) {
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`);
   }
}
