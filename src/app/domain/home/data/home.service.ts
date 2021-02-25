import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/data/loading.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private loading: LoadingService) {}

  getCategories$() {
    this.loading.setState({ loading: true, errorMessage: '' });
    return this.http
      .get('https://angularbuilders-pre.herokuapp.com/api/v1/categories')
      .pipe(
        map((result) => result['data']),
        tap(() => this.loading.setState({ loading: false, errorMessage: '' })),
        catchError((err) => {
          this.loading.setState({ loading: false, errorMessage: err.message });
          throw err;
        })
      );
  }
  getItems$() {
    this.loading.setState({ loading: true, errorMessage: '' });
    return this.http
      .get('https://angularbuilders-pre.herokuapp.com/api/v1/items')
      .pipe(
        map((result) => result['data']),
        tap(() => this.loading.setState({ loading: false, errorMessage: '' })),
        catchError((err) => {
          this.loading.setState({ loading: false, errorMessage: err.message });
          throw err;
        })
      );
  }
}
