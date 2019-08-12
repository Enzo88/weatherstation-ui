import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCardComponentHome} from './weather-card-home.component';

describe('WeatherCardComponentHome', () => {
  let component: WeatherCardComponentHome;
  let fixture: ComponentFixture<WeatherCardComponentHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCardComponentHome]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponentHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
