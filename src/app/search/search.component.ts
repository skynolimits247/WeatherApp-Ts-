import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';
import{SharedataService} from './sharedata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private service: SharedataService) { }
  data:string;
  ngOnInit() {
  }

  GetLocation(data){
     this.service.sendData(data)
  }
}
