import { Component } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  get getResults(){
    return this.giftService.result
  }

  constructor(private giftService: GiftsService){}
}
