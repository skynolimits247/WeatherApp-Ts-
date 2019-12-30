import { Component, OnInit } from '@angular/core';
import {SharedataService} from '../search/sharedata.service';
import{IWeatherData} from '../IWeatherdata';

@Component({
  selector: 'app-nanodisplay',
  templateUrl: './nanodisplay.component.html',
  styleUrls: ['./nanodisplay.component.css']
})
export class NanodisplayComponent implements OnInit {
  data: IWeatherData;
  visible = true;
  constructor(private service: SharedataService) { }

  ngOnInit() {
                  this.service.$search.subscribe((res) =>{
                  this.visible = true;
                  this.data = res;
  },
    error => {
    this.visible = false;
    console.log('error');
    alert('Please enter a valid city name...!!!');
  });
  }

}
