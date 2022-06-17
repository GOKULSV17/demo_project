import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  Inject
} from '@angular/core';
import {
  CoverDataService
} from '../services/cover-data.service'
import {
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material/dialog'
import {
  min
} from 'moment';
import {
  FormArray,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  lifeCover: boolean = false;
  disabilityCover: boolean = false;
  incomeProtectionCover: boolean = false;
  criticalIllnessCover: boolean = false;
  p_lifeCover: boolean = false;
  p_disabilityCover: boolean = false;
  p_incomeProtectionCover: boolean = false;
  p_criticalIllnessCover: boolean = false;
  public coverArraySelf: any = {}
  public coverArrayPartner: any = {}
 public coverValue: any = ''
  autoTicks = false;
  disabled = false;
  invert = false;
  showTicks = false;
  step = 500;
  thumbLabel = false;
  lifeCoverMin = 90000;
  lifeCoverMax = 500000;
  disabilityCoverMin = 20000;
  disabilityCoverMax = 200000;
  incomeProtectionCoverMin = 30000;
  incomeProtectionCoverMax = 300000;
  criticalIllnessCoverMin = 40000;
  criticalIllnessCoverMax = 400000;

  p_lifeCoverMin = 90000;
  p_lifeCoverMax = 500000;
  p_disabilityCoverMin = 20000;
  p_disabilityCoverMax = 200000;
  p_incomeProtectionCoverMin = 30000;
  p_incomeProtectionCoverMax = 300000;
  p_criticalIllnessCoverMin = 40000;
  p_criticalIllnessCoverMax = 400000;

  lifeCoverValue = 0;
  disabilityCovervalue = 0;
  incomeProtectionCoverValue = 0;
  criticalIllnessCoverValue = 0;

  p_lifeCoverValue = 0;
  p_disabilityCovervalue = 0;
  p_incomeProtectionCoverValue = 0;
  p_criticalIllnessCoverValue = 0;

  tickInterval = 1;
  totalValue: any;
  constructor(private coverDataS: CoverDataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.coverArraySelf.length
    this.coverArrayPartner.length
    this.coverDataS.coverArraySelf.subscribe(data => {
      this.coverArraySelf = data;
      console.log(this.coverArraySelf)
      for (let i = 0; i < this.coverArraySelf.length; i++) {
        if (this.coverArraySelf[i] === 'LifeCover') {
          this.lifeCover = true;
          this.lifeCoverValue=10000;
        } else if (this.coverArraySelf[i] === 'DisabilityCover') {
          this.disabilityCover = true;
          this.disabilityCovervalue = 30000;
        } else if (this.coverArraySelf[i] === 'IncomeProtectionCover') {
          this.incomeProtectionCover = true;
          this.incomeProtectionCoverValue = 40000;
        } else if (this.coverArraySelf[i] === 'CriticalIllnessCover') {
          this.criticalIllnessCover = true;
          this.criticalIllnessCoverValue = 50000;
        }
      }

    })
    this.coverDataS.coverArrayPartner.subscribe(data => {
      this.coverArrayPartner = data
      console.log(this.coverArrayPartner)
      for (let i = 0; i < this.coverArrayPartner.length; i++) {
        if (this.coverArrayPartner[i] === 'LifeCover') {
          this.p_lifeCover = true;
          this.p_lifeCoverValue=10000;
        } else if (this.coverArrayPartner[i] === 'DisabilityCover') {
          this.p_disabilityCover = true;
          this.p_disabilityCovervalue = 30000;
        } else if (this.coverArrayPartner[i] === 'IncomeProtectionCover') {
          this.p_incomeProtectionCover = true;
          this.p_incomeProtectionCoverValue = 40000;
        } else if (this.coverArrayPartner[i] === 'CriticalIllnessCover') {
          this.p_criticalIllnessCover = true;
          this.p_criticalIllnessCoverValue = 50000;
        }
      }
   
    })
    this.coverDataS.coverData.subscribe(data => {
      this.coverValue = data;
      console.log(data)
    })
    this.Remove(event)
  }

  addCover() {
    const dialogRef = this.dialog.open(AddSectionComponent, {
      data: {
        LC: this.lifeCover,
        DC: this.disabilityCover,
        IPC: this.incomeProtectionCover,
        CIC: this.criticalIllnessCover,
        p_LC: this.p_lifeCover,
        p_DC: this.p_disabilityCover,
        p_IPC: this.p_incomeProtectionCover,
        p_CIC: this.p_criticalIllnessCover,
        C_value: this.coverValue
      }
    });
  }
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  public Remove(event:any){
    console.log(event)
    if(this.coverValue!='both'){
    const index: number = this.coverArraySelf.indexOf(event);
    console.log(this.coverArraySelf.length)
    if (index !== -1) {
        this.coverArraySelf.splice(index, 1);
        console.log(this.coverArraySelf)
    }  
  }else{
    const index: number = this.coverArrayPartner.indexOf(event);
    console.log(this.coverArrayPartner.length)
    if (index !== -1) {
        this.coverArrayPartner.splice(index, 1);
        console.log(this.coverArrayPartner)
    }  
  }
  }

  public Add(event:any){
    console.log(event)
    if(this.coverValue!='both'){
    const index: number = this.coverArraySelf.indexOf(event);
    console.log(this.coverArraySelf.length)
    if (index !== -1) {
        this.coverArraySelf.push(index, 1);
        console.log(this.coverArraySelf)
    }  
  }else{
    const index: number = this.coverArrayPartner.indexOf(event);
    console.log(this.coverArrayPartner.length)
    if (index !== -1) {
        this.coverArrayPartner.push(index, 1);
        console.log(this.coverArrayPartner)
    }  
  }
  }

  nextSection() {
    console.log(this.coverArraySelf)
    console.log(this.totalValue)
  }

}


@Component({
  selector: 'add-section',
  templateUrl: './add-section.component.html'
})
export class AddSectionComponent {
  lifeCover: boolean = false;
  disabilityCover: boolean = false;
  incomeProtectionCover: boolean = false;
  criticalIllnessCover: boolean = false;
  p_lifeCover: boolean = false;
  p_disabilityCover: boolean = false;
  p_incomeProtectionCover: boolean = false;
  p_criticalIllnessCover: boolean = false;
  coverValue: any = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.lifeCover = data.LC
    this.disabilityCover = data.DC
    this.incomeProtectionCover = data.IPC
    this.criticalIllnessCover = data.CIC

    this.p_lifeCover = data.p_LC
    this.p_disabilityCover = data.p_DC
    this.p_incomeProtectionCover = data.p_IPC
    this.p_criticalIllnessCover = data.p_CIC
    this.coverValue = data.C_value
    console.log(this.p_criticalIllnessCover, this.p_disabilityCover, this.p_incomeProtectionCover, this.p_lifeCover)
  }
}
