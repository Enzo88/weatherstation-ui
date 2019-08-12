import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherServiceHome} from '../../services/weather-home/weather-home.service';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-weather-card-home',
  templateUrl: './weather-card-home.component.html',
  styleUrls: ['./weather-card-home.component.css']
})
export class WeatherCardComponentHome implements OnInit, OnDestroy {
  @Input() city: string;
  @Input() device_id: number;

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;

  constructor(public weather: WeatherServiceHome,
              public router: Router,
              public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.weather.getWeatherState(this.device_id)
      .subscribe((data: string) => {
        this.condition = data;
      });

    this.weather.getCurrentTemp(this.device_id).subscribe((data: number) => {
      this.currentTemp = data;
    });
    this.weather.getMinTemp(this.device_id).subscribe((data: number) => {
      this.minTemp = data;
    });
    this.weather.getMaxTemp(this.device_id).subscribe((data: number) => {
      this.maxTemp = data;
    });
  }

  ngOnDestroy() {

  }

  openDetails() {
    this.router.navigateByUrl('/details/'+this.city);
  }

}
