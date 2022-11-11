import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/service/product.service';
import { faTrash , faEdit } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:undefined | product[]
  productMessage:undefined | string;
  icon=faTrash;
  editicon=faEdit;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.updatedProductList();
  }
  deleteProduct(id:number){
    console.warn("delete id",id);

    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="this product is deleted"
        this.updatedProductList();
      }
    })
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }
  updatedProductList(){
    this.product.productList().subscribe((result)=>{
      if(result){
        this.productList=result;
      }
    })
  }

}
