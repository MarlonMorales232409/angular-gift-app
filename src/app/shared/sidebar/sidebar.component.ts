import { Component } from '@angular/core';
import { GiftsService } from '../../gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {


  searchFromHistory(query: string){
    this.giftsServices.searchGift(query)
  }

  get searchHistory(){
    return this.giftsServices.getHistory
  }

  constructor(private giftsServices: GiftsService){}

}
