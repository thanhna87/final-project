import { Component } from '@angular/core';
import { NavigationComponent } from '../../common-component/navigation/navigation.component';
import { FooterComponent } from '../../common-component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { response } from 'express';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  providers: [ProductService],
  styleUrls: ['./product.component.css', '../../../css/bootstrap.min.css'],
  imports: [
    NavigationComponent,
    FooterComponent,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductComponent {
  loadDataRowIntoModal(selectProduct: any) {
    this.addNewFlag = false;
    console.log(selectProduct);
    this.newProduct = { ...selectProduct };
    this.selectedImageName = this.newProduct.image;
    this.isModalOpen = true;
  }
  ngOnInit(): void {
    //load categories to dropdown after open product component
    this.dataService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  selectedImageName: any;
  categories: any;
  isModalOpen: boolean = false;

  onImageSelected(event: any) {
    const fileInput = event.target;
    const selectFiles = fileInput.files[0]; //fileInput.files[0];
    this.selectedImageName = selectFiles.name;
    this.newProduct.image = selectFiles.name;
  }

  closeAddProductModal() {
    this.isModalOpen = false;
  }

  openAddProductModal() {
    this.newProduct = {
      title: '',
      price: 0,
      description: '',
      image: '',
      category: '',
    };
    this.selectedImageName = ''
    this.isModalOpen = true;
    // this.dataService.getAllCategories().subscribe(
    //   (data)=> {
    //     this.categories = data
    //   }
    // )
  }

  newProduct: any = {
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  };

  sucessSave: boolean = false;
  failSave: any;

  closeFailSave() {
    this.failSave = false;
  }
  closeSuccessSave() {
    this.sucessSave = false;
  }

  addNewFlag: boolean = true;
  saveProduct() {
    //if nguoi dung click va
    //get thong tin tu form dua vao cho API add new product
    if (this.addNewFlag) {
      console.log("Add new")
      console.log(this.newProduct);
      this.dataService.addProduct(this.newProduct).subscribe(
        (response) => {
          console.log(response);
          this.sucessSave = true;
        },
        //báo save thất bại nếu trả về lỗi
        (error) => {
          console.log(error);
          this.failSave = true;
        }
      )
    }
    else {
      console.log("Update")
      console.log(this.newProduct);
      this.dataService.addProduct(this.newProduct).subscribe(
        (response) => {
          console.log(response);
          this.sucessSave = true;
        },
        //báo save thất bại nếu trả về lỗi
        (error) => {
          console.log(error);
          this.failSave = true;
        }
      )
    }

    this.isModalOpen = false;
    this.addNewFlag = true;
    //bao save thanh cong (modal su dung bootstrap4)
  }

  products: any[] = []; //binding this data to HTML

  formSearch = {
    id: '',
  };

  constructor(private dataService: ProductService) {}

  //function calls after click search
  onSubmit() {
    this.products = [];
    if (this.formSearch.id != '') {
      this.dataService
        .getProductById(this.formSearch.id)
        .subscribe((response) => {
          //dữ liệu trả về/response về từ API
          this.products[0] = response;
        });
    } else {
      this.dataService.getProducts().subscribe((response) => {
        //dữ liệu trả về/response về từ API
        this.products = response;
      });
    }
  }

  isDeleteConfirmationModalOpen: boolean = false;
  productIDToBeDeleted: string = '';

  cancelDelete() {
    this.isDeleteConfirmationModalOpen = false;
  }

  confirmDelete(product: any) {
    this.isDeleteConfirmationModalOpen = true;
    this.productIDToBeDeleted = product.id;
    // this.deleteProduct()
  }

  deleteProduct() {
    this.dataService
      .deleteProduct(this.productIDToBeDeleted)
      .subscribe((response) => {
        console.log(response);
        alert('Deleted successfully');
        this.isDeleteConfirmationModalOpen = false;
      });
  }
}
