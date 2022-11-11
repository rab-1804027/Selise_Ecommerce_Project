import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductMessage:string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  submit(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage="Product added successfully"
      }
      setTimeout(() =>this.addProductMessage=undefined,3000);
    });
  }
}
