import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CoverDataService } from '../services/cover-data.service'

@Component({
  selector: 'app-type-of-cover',
  templateUrl: './type-of-cover.component.html',
  styleUrls: ['./type-of-cover.component.css']
})
export class TypeOfCoverComponent implements OnInit {
  form: FormGroup;
  coverOption: string | undefined;
  public toDisplay_partner = false;
  public toDisplay_myself = true;
  typeOfCover:boolean=false;
  coverName: Array<any> = [
    { name: 'LifeCover', value: 'LifeCover' },
    { name: 'DisabilityCover', value: 'DisabilityCover' },
    { name: 'IncomeProtectionCover', value: 'IncomeProtectionCover' },
    { name: 'CriticalIllnessCover', value: 'CriticalIllnessCover' }
  ];
  /**
   * creating the form group to store the value of the self & partner
   */
  constructor(private coverDataS: CoverDataService, private fb: FormBuilder, private stepper: MatStepper) {
    this.form = this.fb.group({
      self: this.fb.array([], [Validators.required]),
      partner: this.fb.array([], [Validators.required])
    })
  }
  /**
   * resive the data of the cover value 
   */
  ngOnInit(): void {
    this.coverDataS.coverData.subscribe(data => {
      this.coverOption = data
    })
  }
  /**
   * store the data of cover for self
   * @param event get the check box clicked data of self cover
   */
  checkBoxForSelf(event: any) {
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
  /**
   * store the data of cover for partner
   * @param event get the check box clicked data of partner cover
   */
  checkBoxForPartner(event: any) {
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
  /**
   * @retrun send the selected data for cover to the next stepper 
   */
  nextSection() {
    this.coverDataS.sendCoverArraySelf(this.form.value['self'])
    this.coverDataS.sendCoverArrayPartner(this.form.value['partner'])
    this.coverDataS.typeOfCoverStatus(this.typeOfCover=true)
  
  }
  /**
   * go to the previious stepper section
   */
  goBack() {
    this.stepper.previous();
  }
}
