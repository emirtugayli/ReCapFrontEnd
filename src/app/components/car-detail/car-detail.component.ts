import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages:CarImage[]=[]
  carDetails:CarDto[];
  currentCar:Car;
  dataLoaded=false;
  apiUrl="https://localhost:44396/uploads"
  constructor(private carImageService:CarImageService, private carDetailService:CarDtoService , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void { this.activatedRoute.params.subscribe(params => {
    if (params["carId"]) {
      this.getCarDetailsByCarId(params["carId"]);
      this.getCarImagesByCarId(params["carId"]);
    } 
  })
  }

  getCarDetailsByCarId(carId:number)
  {
    this.carDetailService.getCarsDetailsByCarId(carId).subscribe(respond=>this.carDetails=respond.data)
    this.dataLoaded=true
  }
  getCarImagesByCarId(carId:number)
  {
    this.carImageService.getCarImagesById(carId).subscribe(respond=>this.carImages=respond.data)
    this.dataLoaded=true
  }

  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item ";
    }
  }
  setButtonHomePage(currentCar:Car){
    this.currentCar=currentCar
 }
 getButtonHomePageClass(currentCar:Car){
  return '"btn btn-primary"'
}
}
