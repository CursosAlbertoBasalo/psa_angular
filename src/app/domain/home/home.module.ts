import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataModule } from 'src/app/shared/data/data.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './ui/categories/categories.component';
import { ItemsComponent } from './ui/items/items.component';

@NgModule({
  declarations: [HomeComponent, CategoriesComponent, ItemsComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule, DataModule],
})
export class HomeModule {}
