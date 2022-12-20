import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('searchInput') txtSearch!: ElementRef<HTMLInputElement>

  constructor(private giftsService: GiftsService){}

  searchGifts(){    
    const value = this.txtSearch.nativeElement.value

    if(!value.trim()) return 

    this.giftsService.searchGift(value)

    this.txtSearch.nativeElement.value = ''
  }

}
