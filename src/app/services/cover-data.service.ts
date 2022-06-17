import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CoverDataService {
  public coverData = new Subject<string>();
  public coverArraySelf = new Subject<any>();
  public coverArrayPartner = new Subject<any>();
  public userData= new Subject<any>();
  constructor() { }

  sendCoverData(data: string){
    this.coverData.next(data);
  }

  sendCoverArraySelf(data:any){
this.coverArraySelf.next(data);
  }

  sendCoverArrayPartner(data:any){
    this.coverArrayPartner.next(data)
  }
   sendUserData(data:any){
    this.userData.next(data)
   }
}
