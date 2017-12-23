import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { STYLES } from './mapStyles';
import {} from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public city: string;
  public weather;
  public title = 'My first AGM project';
  public lat = 51.678418;
  public lng = 7.809007;
  public styles = STYLES;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(public ws: WeatherService, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    });
}


  getCity() {
    if (this.city !== '') {
      this.weather = this.ws.getWeather(this.city).subscribe(res => {
        this.lat = res.coord.lat;
        this.lng = res.coord.lon;
        console.log(res.coord);
      });
    }
  }
}
