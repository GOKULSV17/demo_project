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
export class LifeInsuredComponent implements OnInit {
  userData = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    cover: [''],
    gender: [''],
    DOB: ['', Validators.required],
    education: [''],
    job: ['', Validators.required],
    income: ['', Validators.required],
    tobacouse: [''],
    p_gender: ['Na'],
    p_DOB: ['Na', Validators.required],
    p_education: ['Na'],
    p_job: ['Na', Validators.required],
    p_income: ['', Validators.required],
    p_tobacouse: ['Na'],
  })
  
  continueStatus: boolean = false;
  steps: any = 1;
  coverFor: any = 1;
  partnersText: string = '';
  occupations: any = (occupation as any).default;
  
  constructor(private fb: FormBuilder, private coverDataS: CoverDataService, private http: HttpClient) { }

  get f() {
    return this.userData.controls;
  }

  firstSection() {
    this.coverDataS.sendCoverData(this.userData.controls['cover'].value)
    this.coverDataS.sendUserData([this.userData.controls['name'].value, this.userData.controls['phoneNumber'].value, this.userData.controls['email'].value])
  }

  back() {
    this.steps = this.steps - 1;
    console.log(this.steps)
  }

  fTobacco(tobacouse: boolean) {
    if (this.userData.controls['cover'].value == 'both' && this.coverFor != 2 || this.userData.controls['p_gender'].value == ' ') {
      this.userData.controls['tobacouse'].setValue(tobacouse)
      this.steps = 3;
      this.coverFor = 2;
      this.partnersText = "partner's";
    } else {
      this.userData.controls['p_tobacouse'].setValue(tobacouse)
      this.steps = 9
    }
  }
}
