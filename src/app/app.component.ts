import { Component } from '@angular/core';
import { LoadingService } from './shared/data/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading$;
  constructor(loading: LoadingService) {
    this.loading$ = loading.getState$();
  }
}
