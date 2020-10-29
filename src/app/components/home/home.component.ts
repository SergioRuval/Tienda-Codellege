import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  muestras: any[][] = [];
  departments: string[] = [];

  constructor(private _producsService: ProductsService){
    
  }

  ngOnInit(): void {
    this.departments = this._producsService.getDepartments();
    this.muestras = this._producsService.getSamples();
    console.log(this.departments);
    console.log(this.muestras);
  }

}
