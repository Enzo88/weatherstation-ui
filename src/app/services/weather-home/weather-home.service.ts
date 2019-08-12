import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
export class WeatherServiceHome {

  constructor(public http: HttpClient) {
  }

  getWeatherState(device_id: number): Subject<string> {
    const dataSubject = new Subject<string>();
    this.http.get(
      `http://localhost:8080/api/getWeatherState/${device_id}`)
      .subscribe((data) => {
        dataSubject.next(data['state']);
      });
    return dataSubject;
  }

  getCurrentTemp(device_id: number): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(
      `http://localhost:8080/api/getCurrentTemp/${device_id}`)
      .subscribe((data) => {
        dataSubject.next(data['temp']);
      });
    return dataSubject;
  }


  getCurrentHum(device_id: number): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(
      `http://localhost:8080/api/getCurrentHum/${device_id}`)
      .subscribe((data) => {
        dataSubject.next(data['hum']);
      });
    return dataSubject;
  }


  getCurrentPressure(device_id: number): Subject<number> {    
    const dataSubject = new Subject<number>();
    this.http.get(
      `http://localhost:8080/api/getCurrentPressure/${device_id}`)
      .subscribe((data) => {
        dataSubject.next(data['pressure']);
      });
    return dataSubject;
  }


  getMaxTemp(device_id: number): Subject<number> {    
    const dataSubject = new Subject<number>();
    this.http.get(
      `http://localhost:8080/api/getMaxTemp/${device_id}`)
      .subscribe((data) => {
        dataSubject.next(data['maxTemp']);
      });
    return dataSubject;
  }

  getMinTemp(device_id: number): Subject<number> {    
    const dataSubject = new Subject<number>();
    this.http.get(
      `http://localhost:8080/api/getMinTemp/${device_id}`)
      .subscribe((data) => {
        dataSubject.next(data['minTemp']);
      });
    return dataSubject;
  }
}
