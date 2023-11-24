import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WserviceService {

  constructor(private http:HttpClient) { }
  geturl(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=6b3040ae7ac61d1873e4063078f448f7&units=imperial');
  }
}


//6b3040ae7ac61d1873e4063078f448f7 

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=6b3040ae7ac61d1873e4063078f448f7&units=imperial