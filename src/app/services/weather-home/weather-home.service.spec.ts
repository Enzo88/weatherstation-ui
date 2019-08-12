import {inject, TestBed} from '@angular/core/testing';

import {WeatherServiceHome} from './weather-home.service';

describe('WeatherServiceHome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherServiceHome]
    });
  });

  it('should be created', inject([WeatherServiceHome], (service: WeatherServiceHome) => {
    expect(service).toBeTruthy();
  }));
});
