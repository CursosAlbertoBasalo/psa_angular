import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './shared/data/data.module';
import { LoadingService } from './shared/data/loading.service';
import { UiModule } from './shared/ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, DataModule],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
