import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WeatherService } from '../../services/weather.service';
import { STYLES } from './mapStyles';
import { } from '@types/googlemaps';
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
  public weatherImg = '';
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
      console.log(this.weather.weather[0].id);
      this.updatePosition();
    });
    localStorage.setItem('city', this.city);
    switch (this.weather.weather[0].id) {
      case 200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232:
        this.weatherImg = 'thunder.svg';
        break;
      case 300 || 301 || 310 || 311 || 313:
        this.weatherImg = 'rainy-2.svg';
        break;
      case 302 || 312 || 314:
        this.weatherImg = 'rainy-3.svg';
        break;
      case 321:
        this.weatherImg = 'rainy-6.svg';
        break;
      case 500 || 501 || 502 || 520:
        this.weatherImg = 'rainy-5.svg';
        break;
      case 503 || 504 || 521 || 522 || 531:
        this.weatherImg = 'rainy-6.svg';
        break;
      case 511:
        this.weatherImg = 'rainy-7.svg';
        break;
      case 600 || 601:
        this.weatherImg = 'snowy-1.svg';
        break;
      case 602 || 622 || 621:
        this.weatherImg = 'snowy-6.svg';
        break;
      case 611 || 612 || 615 || 616 || 620:
        this.weatherImg = 'snowy-5.svg';
        break;
      case 611 || 612 || 615 || 616 || 620:
        this.weatherImg = 'snowy-5.svg';
        break;
      // tslint:disable-next-line:max-line-length
      case 701 || 711 || 721 || 731 || 741 || 751 || 761 || 762 || 771 || 781 || 951 || 952 || 953 || 954 || 955 || 956 || 957 || 958 || 959 || 960 || 961 || 962:
        this.weatherImg = 'cloudy.svg';
        break;
      case 800:
        this.weatherImg = 'day.svg';
        break;
      case 801:
        this.weatherImg = 'cloudy-day-1.svg';
        break;
      case 802:
        this.weatherImg = 'cloudy-day-2.svg';
        break;
      case 801:
        this.weatherImg = 'cloudy-day-1.svg';
        break;
      case 803 || 804:
        this.weatherImg = 'cloudy.svg';
        break;
      case 900  ||  901  || 902 || 903 || 904 || 905 || 906:
        this.weatherImg = 'thunder.svg';
        break;

      default:
        break;
    }
  }
}
