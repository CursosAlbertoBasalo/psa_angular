import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories$() {
    return this.http
      .get('https://angularbuilders-pre.herokuapp.com/api/v1/categories')
      .pipe(map((result) => result['data']));
  }
  getItems$() {
    return this.http
      .get('https://angularbuilders-pre.herokuapp.com/api/v1/items')
      .pipe(map((result) => result['data']));
  }
}
