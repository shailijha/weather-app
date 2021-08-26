import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  weatherData;
  weekly = [];
  hourly = [];
  today = {
    city: '',
    state: '',
    country: '',
    description: '',
    temperature: '',
    highTemperature: '',
    lowTemperature: '',
    iconLink: '',
    iconName: '',
    date: ''
  };
  fetchWeek = false;
  fetchHour = false;
  fetchTod = false;
  location = '';
  locErr = false;

  constructor(private fetchWeatherService: FetchWeatherService) { }

  ngOnInit(): void {
  }

  fetchToday() {
    if(this.location.length === 0) {
      this.locErr = true;
    } else {
      this.fetchWeatherService.fetchLocationWeather().subscribe(
        res => {
          console.log(res);
          this.weatherData = res;
          this.weekly = this.weatherData['daily'];
          this.hourly = this.weatherData['hourly'];
          this.today = this.weatherData['today'];
          this.fetchTod = true;
          this.fetchWeek = false;
          this.fetchHour = false;
          // res.
          this.today['date'] = new Date(this.today['utcTime']).toUTCString();
        }, err => {
          console.log('Failed to fetch data. Please try again', err);
        }
      );

    }
  }

  fetchWeekly() {
    this.fetchWeek = true;
    this.fetchTod = false;
    this.fetchHour = false;
  }

  fetchHourly() {
    this.fetchHour = true;
    this.fetchTod = false;
    this.fetchWeek = false;
    this.hourly.forEach(hour => {
      let time = parseInt(hour.localTime.slice(0,2));
      if(time >= 12) {
        hour.time = `${time - 12 == 0 ? 12 : time - 12} pm`;
      } else {
        hour.time = `${time == 0 ? 12 : time} am`;
      }
    })
  }

}
