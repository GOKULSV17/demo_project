import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CoverDataService } from '../services/cover-data.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-request-call',
  templateUrl: './request-call.component.html',
  styleUrls: ['./request-call.component.css']
})
export class RequestCallComponent implements OnInit {

  constructor(private coverDataS: CoverDataService, private fb: FormBuilder, private stepper: MatStepper) { }
  public userValue: any
  public name: any
  public phoneNumber: any
  public email: any
  public userDatas: any
  continueStatus: boolean = false;
  /**
   * resive the data from the first stepper
   * store the value in there name 
   */

  ngOnInit(): void {
    this.coverDataS.userData.subscribe(data => {
      this.userValue = data;
      this.name = this.userValue['name']
      this.phoneNumber = this.userValue['phoneNumber']
      this.email = this.userValue['email']
      console.log(this.userValue, this.name,this.phoneNumber,this.email)
      this.userDatas = this.fb.group({
        name: [this.name, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
        phoneNumber: [this.phoneNumber, [Validators.required, Validators.minLength(10)]],
        email: [this.email, [Validators.required, Validators.email]],

      })
    })

  }
/**
 * get the for the validation purpose
 */
  get LifeInsurance() {
    return this.userDatas.controls;
  }
/**
 * check the validation of continue button
 * it's compleated show the sweetalert of compleated status 
 * @returns send the data od userDatas to the LifeInsurance 
 */
  final() {
    console.log(this.userValue.value, this.userDatas.value)
    if (this.userDatas.controls['name'].invalid || this.userDatas.controls['email'].invalid || this.userDatas.controls['phoneNumber'].invalid) {
      this.continueStatus = true
      return
    }else{
      Swal.fire({
        title: 'Thank You..',
        text: 'You submitted succesfully!',
        icon: 'success',
      }).then(function() {
        window.open("https://www.google.com", "_blank");
    });
    }
  }
  /**
   * go to the previious stepper section
   */
  goBack() {
    this.stepper.previous();
  }
}
