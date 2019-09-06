import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../Service/service.service';
import {RecordService} from '../Service/record.service';
import {MemberService} from '../service/member.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cancel-member',
  templateUrl: './cancel-member.component.html',
  styleUrls: ['./cancel-member.component.css']
})
export class CancelMemberComponent implements OnInit {
  member: any;
  [x: string]: any;  
    public API = '//localhost:8080';
  
  public  mold = {
    moldID : Number,
    nameM : Number,
    model : String,
    product : String,
  };
  
  models: Array<any>;
  modelSelect: number = 0;
  addis: any = {
    inputNote: ''
  }
  dataColumns: string[] = ['id', 'nameM', 'model','product', 'CreditPay'];

  DeleteMember(moldID) {
    if (this.serviceService.push === false) {
      this.http.delete(this.API + '/mold' +  '/' + moldID).subscribe(
        data => {
          console.log(' Delet is successful', data);
        },
        error => {
          console.log('Error', error);
        }
      );
    } else {
      this.serviceService.counter = this.serviceService.counter - 1 ;
      this.http.delete(this.API + '/mold' +  '/' + moldID).subscribe(
        data => {
          console.log(' Delet is successful', data);
        },
        error => {
          console.log('Error', error);
        }
      );


    }

  }

  end() {
    if (this.serviceService.push === false) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน ');
    } else {
      alert('ดำเนินการเสร็จสิ้น');
    }
  }



  getmold(): Observable<any> {

    return this.http.get(this.API + '/mold');
  }

  constructor( public  serviceService: ServiceService,private memberService: MemberService,private recordService: RecordService, public  http: HttpClient) { }

  ngOnInit() {
    this.getmold().subscribe(data => {
      this.member = data;
      console.log(this.member);
    });
    this.serviceService.getmold().subscribe(data => {
      this.serviceService.member = data;
      console.log(this.serviceService.member);
    });

    this.recordService.getMold().subscribe(data => {
      this.models = data;
      console.log(this.models);
    });
    
  }

  }

