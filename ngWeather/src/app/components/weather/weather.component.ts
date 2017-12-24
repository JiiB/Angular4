import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WeatherService } from '../../services/weather.service';
import { STYLES } from './mapStyles';
import {} from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { WeatherData } from '../../models/weather.model';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public city: string;
  public weather: WeatherData;
  public title = 'My first AGM project';
  public lat = 51.678418;
  public lng = 7.809007;
  public styles = STYLES;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(public ws: WeatherService, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    // this.mapsAPILoader.load().then(() => {
    //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    // });
    const ls = localStorage.getItem('city');
    if (ls !== null) {
        this.city = ls;
        this.getCity();
    }
  }

  updatePosition() {
    this.lat = this.weather.coord.lat;
    this.lng = this.weather.coord.lon;
  }

  getCity() {
      this.ws.getWeather(this.city).subscribe((data: WeatherData) => {
        this.weather = data;
        console.log(this.weather);
        this.updatePosition();
      });
      localStorage.setItem('city', this.city);
    }
}
