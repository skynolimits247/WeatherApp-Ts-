import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {SharedataService} from '../search/sharedata.service';
import{IWeatherData} from '../IWeatherdata';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public data:IWeatherData;
  public visible:boolean=true;
  constructor(private service: SharedataService) { 
  }
  ngOnInit() {
                  this.service.$search.subscribe((res) =>{
                    this.data=res;
  },error=> { this.visible=false;
                      console.log("error")
                    alert("Please enter a valid city name")})
  }

}
