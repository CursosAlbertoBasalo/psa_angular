import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CategoriesComponent {
  @Input() public categories = [];
}
