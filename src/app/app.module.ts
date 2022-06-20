import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material/stepper';
import { LifeInsuredComponent } from './life-insured/life-insured.component';
import { TypeOfCoverComponent } from './type-of-cover/type-of-cover.component';
import { QuoteComponent,AddSectionComponent } from './quote/quote.component';
import { RequestCallComponent } from './request-call/request-call.component'
import{MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input'
import{MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {FormsModule, ReactiveFormsModule,} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon'
import{MatSelectModule} from '@angular/material/select';
import { CurrencyPipe } from './pipes/currency.pipe';
import{MatSliderModule} from '@angular/material/slider'
import '@angular/common/locales/global/fr';
import {MatDialogModule} from '@angular/material/dialog'
// import{SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

@NgModule({
  declarations: [
    AppComponent,
    LifeInsuredComponent,
    TypeOfCoverComponent,
    QuoteComponent,
    RequestCallComponent,
    CurrencyPipe,
    AddSectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,

    MatSliderModule,
    MatDialogModule,
 

    
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
