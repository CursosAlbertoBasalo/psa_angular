import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItemById$(id: string) {
    return this.http
      .get('https://angularbuilders-pre.herokuapp.com/api/v1/items/' + id)
      .pipe(map((result) => result['data']));
  }
}
