import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cardetails:CarDto[]=[]
  dataLoaded = false;
  constructor(private carService: CarService , private activatedRoute : ActivatedRoute , private carDtoService:CarDtoService , private router:Router) { }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"] && params["colorId"]) {
        this.getCarDetails(params["brandId"],params["colorId"]);
      }
      else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
      }
      else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"])
      }
      else {
        this.getCars();
      }
    })
  }

  getCars(){
    this.carDtoService.getCarsDetails().subscribe(respond=>this.cardetails=respond.data)
    this.dataLoaded=true;
  }

  getCarsByBrandId(brandId:number){
    this.carDtoService.getCarsDetailsByBrandId(brandId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColorId(colorId:number){
    this.carDtoService.getCarsDetailsByColorId(colorId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetails(brandId:number, colorId:number){
    this.carDtoService.getCarDetailsByBrandAndColor(brandId, colorId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }


  

}
