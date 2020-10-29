import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments = [];
  img_department = ['assets/img/Dep_smartphones.jpg','assets/img/Dep_fotografia.jpg','assets/img/Dep_lineaBlanca.jpg'];

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.departments = this._productsService.getDepartments();
  }

  getUrl(department){
    for(let i = 0; i < this.departments.length; i++){
      if(department == this.departments[i]){        
        return `url("../../../${this.img_department[i]}")`;
      }
    }
  }

}
