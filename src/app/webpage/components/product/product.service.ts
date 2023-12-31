import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//viết code business => logic, handle logic nghiệp vụ function
//nơi cung cấp dữ liệu/data cho component (thông thường là API)

@Injectable({
  providedIn: 'root'
})

//noi viet code login, xu ly bussiness login
export class ProductService {
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProductById(id:string): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }

  deleteProduct(id:string): Observable<any>{
    return this.http.delete('https://fakestoreapi.com/products/'+id)
  }
}
