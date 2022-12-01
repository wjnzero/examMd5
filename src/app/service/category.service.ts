import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
const API = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // categories: Category[] = [{
  //   id: 1,
  //   name: 'IPhone'
  // }, {
  //   id: 2,
  //   name: 'Samsung',
  // }, {
  //   id: 3,
  //   name: 'LG',
  // }];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Category[]>(API + '/categories');
  }

  saveCategory(category) {
    return this.http.post<Category>(API + '/categories', category);
  }

  findById(id: number) {
    return this.http.get<Category>(`${API}/categories/${id}`);
  }

  updateCategory(id: number, category: Category) {
    return this.http.put<Category>(`${API}/categories/${id}`, category);

  }

  deleteCategory(id: number) {
    return this.http.delete<Category>(`${API}/categories/${id}`);
  }
}
