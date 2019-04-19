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
   visibility:boolean=false;
  constructor(private service: SharedataService) { 
  }
  ngOnInit() {
                this.visibility=true
                  this.service.$search.subscribe((res) =>{
                  this.data=res;
                  console.clear()
  },error=> {       this.visibility=false;
                    alert("Please enter a valid city name!!")})
  }

}
