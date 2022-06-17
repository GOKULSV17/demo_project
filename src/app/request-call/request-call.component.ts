import { Component, OnInit } from '@angular/core';
import {
  CoverDataService
} from '../services/cover-data.service'
@Component({
  selector: 'app-request-call',
  templateUrl: './request-call.component.html',
  styleUrls: ['./request-call.component.css']
})
export class RequestCallComponent implements OnInit {

  constructor(private coverDataS:CoverDataService) { }
  public userData:any
  ngOnInit(): void {
this.coverDataS.userData.subscribe(data=>{
this.userData= data;
})
  }

}
