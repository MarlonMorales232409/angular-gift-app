import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GiftPageComponent } from './gift-page/gift-page.component';



@NgModule({
  declarations: [
    GiftPageComponent,
    SearchComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GiftPageComponent,
  ]
})
export class GiftsModule { }
