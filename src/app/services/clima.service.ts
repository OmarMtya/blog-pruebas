import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(
    private http:HttpClient

  ) { }

  getclima(ciudad:string){
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=dd74240a0ac140eea84183731211809&q='+ciudad+'&aqi=no')
  }
}
