import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchAllService } from '../service/server-all.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  [x: string]: any;
  public  points = {
    moldID : Number,
    nameM : Number,
    model : String,
    password : String,
    
  };
  public i = 0;
  
 

  constructor( public  httpClient: HttpClient ,  public  controller:SearchAllService,) {}
  ngOnInit() {

    
    this.controller.getPoint().subscribe(data =>{
      this.points = data;
      console.log(this.points);
    });
    


     
  }
}


