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

  addProduct(product:any):Observable<any>{
    return this.http.post<any>('https://fakestoreapi.com/products', product)    
  }

  /**
   * 
   * @param product 
   */
  updateProductById(product:any):Observable<any>{
    return this.http.put('https://fakestoreapi.com/products/'+product.id, product)    
  }

  /**docstring
   * Copyright 2023 Dec 30
   * Service get all categoried from API
   * developed by thanhnh
   * @returns string[]
   */
  getAllCategories():Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }
}
