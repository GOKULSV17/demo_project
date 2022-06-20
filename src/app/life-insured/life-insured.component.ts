import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms'
import { CoverDataService } from '../services/cover-data.service'
import { HttpClient } from '@angular/common/http'
import * as occupation from '../data/occupations.json';
import { MatStepperNext } from '@angular/material/stepper';

@Component({
  selector: 'app-life-insured',
  templateUrl: './life-insured.component.html',
  styleUrls: ['./life-insured.component.css']
})
export class LifeInsuredComponent {
  public userData = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    cover: [''],
    gender: [''],
    DOB: ['', [Validators.required]],
    education: [''],
    job: ['', [Validators.required]],
    income: ['', [Validators.required]],
    tobacouse: [''],
    p_gender: [''],
    p_DOB: ['', Validators.required],
    p_education: [''],
    p_job: ['', Validators.required],
    p_income: ['', Validators.required],
    p_tobacouse: [''],
  })
  continueStatus: boolean = false;
  steps: any = 1;
  coverFor: any = 1;
  partnersText: string = '';
  occupations: any = (occupation as any).default;
  lifeInsered:boolean=false;
  
  constructor(private fb: FormBuilder, private coverDataS: CoverDataService, private http: HttpClient) { }
/**
 * get the data to LifeInsurance
 * @return value fro the validation
 */
  get LifeInsurance() {
    return this.userData.controls;
  }
  /**
 * check the cover stats is self/partner and chage the direction
 * @param tobacouse get value of usage of tobacouse
 */
   fTobacco(tobacouse: boolean) {
    if (this.userData.controls['cover'].value == 'both' && this.coverFor != 2 || this.userData.controls['p_gender'].value == ' ') {
      this.steps = 9;
      this.coverFor = 2;
      this.partnersText = "partner's";
    } else {
      this.steps = 15
    }
  }
/**
 * send the value for the next stepper section
 */
  firstSection() {
    console.log(this.userData.value)
    this.coverDataS.lifeInsuredStatus(this.lifeInsered=true)
    this.coverDataS.sendCoverData(this.userData.controls['cover'].value)
    this.coverDataS.sendUserData(this.userData.value)
   
  }

}
