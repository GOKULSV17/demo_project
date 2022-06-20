import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CoverDataService {
  public coverData = new Subject<string>();
  public coverArraySelf = new Subject<any>();
  public coverArrayPartner = new Subject<any>();
  public userData = new Subject<any>();
  public lifeInsured = new Subject<any>();
  public typeOfCover =new Subject<any>();
  public quote =new Subject<any>();
  constructor() { }

  sendCoverData(data: string) {
    this.coverData.next(data);
  }

  sendCoverArraySelf(data: any) {
    this.coverArraySelf.next(data);
  }

  sendCoverArrayPartner(data: any) {
    this.coverArrayPartner.next(data);
  }
  sendUserData(data: any) {
    this.userData.next(data);
  }
  lifeInsuredStatus(data: any) {
    this.lifeInsured.next(data);
  }
  typeOfCoverStatus(data:any){
    this.typeOfCover.next(data);
  }
  quoteStatus(data:any){
    this.quote.next(data);
  }
}
