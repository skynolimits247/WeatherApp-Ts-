import { Injectable } from '@angular/core';
import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {IWeatherData} from '../IWeatherData';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedataService {
 baseUrl: string;
 public object: any;
 public data: string;
 $search = new EventEmitter();
  constructor(private http: HttpClient) {
    this.sendData('Delhi');
   }
  sendData(input: string) {
    this.data = input;
    this.APIData(input);
  }
  APIData(data: string){
    this.baseUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${data}&units=metric&appid=27cbda0a9460dcbde70772d0a2d1fdf9`
      this.object =  this.http.get(this.baseUrl).subscribe((res : IWeatherData) => {
                      this.object = res;
                      this.$search.emit(this.object);
                      },
                    error => {
                      alert('Enter a valid city name!');
                    });
  }
}
