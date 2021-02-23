import { Component } from '@angular/core';
import { HomeService } from './data/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  categories$ = this.service.getCategories$();
  items$ = this.service.getItems$();

  constructor(private service: HomeService) {}
}
