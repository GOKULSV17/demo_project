import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import{CoverDataService} from '../services/cover-data.service'

@Component({
  selector: 'app-type-of-cover',
  templateUrl: './type-of-cover.component.html',
  styleUrls: ['./type-of-cover.component.css']
})
export class TypeOfCoverComponent implements OnInit {
  form: FormGroup;
  coverName: Array<any> = [
    { name: 'LifeCover', value: 'LifeCover' },
    { name: 'DisabilityCover', value: 'DisabilityCover' },
    { name: 'IncomeProtectionCover', value: 'IncomeProtectionCover' },
    { name: 'CriticalIllnessCover', value: 'CriticalIllnessCover' }
  ];
constructor(private coverDataS:CoverDataService, private fb:FormBuilder) { 
  this.form = this.fb.group({
    self: this.fb.array([], [Validators.required]),
    partner: this.fb.array([], [Validators.required])
    })   
}
cover=1;
coverOption:string |undefined;
toDisplay_partner=false;
toDisplay_myself=true;
  ngOnInit(): void {
    this.coverDataS.coverData.subscribe(data =>{
      this.coverOption=data
    })
  }
  onCbChangeSelf(event : any) {
    const self: FormArray = this.form.get('self') as FormArray;
    if (event.target.checked) {
      self.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      self.controls.forEach((item) => {
        if (item.value == event.target.value) {
          self.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onCbChangePartner(event : any) {
    const partner: FormArray = this.form.get('partner') as FormArray;
    if (event.target.checked) {
      partner.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      partner.controls.forEach((item) => {
        if (item.value == event.target.value) {
          partner.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  nextSection(){
    this.coverDataS.sendCoverArraySelf(this.form.value['self'])
    this.coverDataS.sendCoverArrayPartner(this.form.value['partner'])
  }
  partner() {
    this.toDisplay_partner = true
    this.toDisplay_myself= false;
  }
  myself(){
    this.toDisplay_myself=true;
    this.toDisplay_partner=false
    this.cover=2
  }
  
}
