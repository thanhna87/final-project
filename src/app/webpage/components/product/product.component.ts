import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { response } from 'express';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    providers:[ProductService],
    styleUrls: ['./product.component.css','../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent, HttpClientModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class ProductComponent {

    products: any[] = [] //binding this data to HTML

  formSearch = {
    id: ""
  }

  

  constructor(private dataService:ProductService){}

  //function calls after click search
  onSubmit() {
    this.products = []
    if (this.formSearch.id != "") {
        this.dataService.getProductById(this.formSearch.id).subscribe(
            (response) => { //dữ liệu trả về/response về từ API
                this.products[0] = response
            }
        )
    } else {
        this.dataService.getProducts().subscribe(
            (response) => { //dữ liệu trả về/response về từ API
                this.products = response
            }
        )
    }
  
    
}

isDeleteConfirmationModalOpen:boolean=false
productIDToBeDeleted:string=""
cancelDelete(){
  this.isDeleteConfirmationModalOpen = false
}

confirmDelete(product: any) {
  this.isDeleteConfirmationModalOpen = true
  this.productIDToBeDeleted=product.id
  // this.deleteProduct()
  }

deleteProduct(){
  this.dataService.deleteProduct(this.productIDToBeDeleted).subscribe(
    (response)=>{
      console.log(response)
      alert("Deleted successfully")
      this.isDeleteConfirmationModalOpen=false
    }
  )
}

}
