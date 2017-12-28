import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WeatherService } from '../../services/weather.service';
import { STYLES } from './mapStyles';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { WeatherData } from '../../models/weather.model';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  public city: string;
  public weather: WeatherData;
  public weatherImg = '';
  public lat = 51.678418;
  public lng = 7.809007;
  private subscription: Subscription;
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
    this.subscription = this.ws.getWeather(this.city).subscribe((data: WeatherData) => {
      this.weather = data;
      console.log(this.weather);
      this.updatePosition();
      switch (this.weather.weather[0].id) {
        case 300:
        case 301:
        case 310:
        case 311:
        case 313:
          this.weatherImg = 'rainy-2.svg';
          break;
        case 302:
        case 312:
        case 314:
          this.weatherImg = 'rainy-3.svg';
          break;
        case 321:
        case 503:
        case 504:
        case 521:
        case 522:
        case 531:
          this.weatherImg = 'rainy-6.svg';
          break;
        case 500:
        case 501:
        case 502:
        case 520:
          this.weatherImg = 'rainy-5.svg';
          break;
        case 511:
          this.weatherImg = 'rainy-7.svg';
          break;
        case 600:
        case 601:
          this.weatherImg = 'snowy-4.svg';
          break;
        case 602:
        case 622:
        case 621:
          this.weatherImg = 'snowy-6.svg';
          break;
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
          this.weatherImg = 'snowy-5.svg';
          break;
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
        case 951:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        case 957:
        case 958:
        case 959:
        case 960:
        case 961:
        case 962:
        case 803:
        case 804:
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
        case 900:
        case 901:
        case 902:
        case 903:
        case 904:
        case 905:
        case 906:
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          this.weatherImg = 'thunder.svg';
          break;

        default:
          break;
      }
    });
    localStorage.setItem('city', this.city);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
