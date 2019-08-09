import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {WeatherService} from './services/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {UiService} from './services/ui/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
