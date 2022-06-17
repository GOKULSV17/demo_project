import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  public getOccupations(){
    var occupations=this.http.get('./data/occupations.json');
    return occupations;
   }
}
