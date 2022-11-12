import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allProducts:undefined | product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.allProducts().subscribe((data)=>{
      console.log(data);
      this.allProducts=data;
    })
  }

}
