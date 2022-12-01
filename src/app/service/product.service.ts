import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
const API = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Product[]>(API + '/products');
  }

  saveProduct(product) {
    return this.http.post<Product>(API + '/products', product);
  }

  findById(id: number) {
    return this.http.get<Product>(`${API}/products/${id}`);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(`${API}/products/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${API}/products/${id}`);
  }
}
