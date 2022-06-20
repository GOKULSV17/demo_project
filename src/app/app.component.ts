import { Component } from '@angular/core';
import {CoverDataService} from './services/cover-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lifeInsered:boolean=false;
  typeOfCover:boolean=false;
  quote:boolean=false;
  /**
   * get te stepper status of each one
   * @param CoverDataS resive the data form the servise 
   */
  constructor(private CoverDataS:CoverDataService){
    this.CoverDataS.lifeInsured.subscribe(data=>{
      this.lifeInsered=data;
    })
    this.CoverDataS.typeOfCover.subscribe(data=>{
      this.typeOfCover=data;
    })
    this.CoverDataS.quote.subscribe(data=>{
      this.quote=data;
    })
  }
  isLinear:boolean=true;
}
