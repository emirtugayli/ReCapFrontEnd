import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : brand[] =[]
  currentBrand : brand;
  dataLoaded = false;

  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response => this.brands = response.data)
    this.dataLoaded = true;
  }

  setCurrentBrand(brand:brand)
  {
    console.log(brand.id);
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:brand)
  {
    if(brand==this.currentBrand)
    {
      return "list-group-item list-group-item-action active";
    }
    else
    {
      return "list-group-item list-group-item-action"
    }
  }
}
