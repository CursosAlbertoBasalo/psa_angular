import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ItemService } from './data/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  item$: Observable<any>;

  constructor(route: ActivatedRoute, service: ItemService) {
    route.data.subscribe();

    const id = route.snapshot.params['id'];
    this.item$ = service.getItemById$(id);

    route.params.subscribe((params) => {
      const id = params['id'];
      this.item$ = service.getItemById$(id);
    });

    this.item$ = route.params.pipe(
      filter((params) => params.id !== null),
      map((param) => param['id']),

      switchMap((id) => service.getItemById$(id))
    );
  }
}
