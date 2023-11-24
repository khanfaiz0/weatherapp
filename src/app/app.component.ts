import { Component, OnInit } from '@angular/core';
import { WserviceService } from './wservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherapp';
  weatherapp:any;
  sumary:string='';
  tem:number=0;
  tmp_min:number=0;
  tmp_max:number=0;
  pressure:number=0;
  humidity:number=0;
  cname:string='';
  wind:number=0;

  constructor(private weatherservice:WserviceService){}
  ngOnInit(){
    this.weatherservice.geturl().subscribe({
      next:(app)=>{console.log(app);
      this.weatherapp=app;
      this.sumary=this.weatherapp.weather[0].main;
      this.cname=this.weatherapp.name;
      this.tem=this.weatherapp.main.temp;
      this.tmp_max=this.weatherapp.main.temp_max;
      this.tmp_min=this.weatherapp.main.temp_min;
      this.pressure=this.weatherapp.main.pressure;
      this.humidity=this.weatherapp.main.humidity;
      this.wind=this.weatherapp.wind.speed;
      },
      error:(err)=>console.log(err.message),
      complete:()=>console.info("api completed")

      
    })
    console.log(this.cname);
    
  }

}
