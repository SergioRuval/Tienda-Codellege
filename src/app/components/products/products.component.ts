import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  departments:string[] = [];
  productos:object[] = [];

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.departments = this._productsService.getDepartments();
    this.productos = this._productsService.getProducts();
  }

}
