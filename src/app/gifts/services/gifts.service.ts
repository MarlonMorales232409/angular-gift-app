import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { GiftApiResponse, Gift } from '../interfaces/gift-api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
  baseUrl = 'https://api.giphy.com/v1/gifs'
  private _apiKey  = 's78EhL8E0LubTAuzIRLXkoD6rpFDAaob'

  private _history:string[] = []

  result: Gift[] = []


  get getHistory(): string[] {
    return [...this._history]
  }

  constructor(private http: HttpClient){
    // ? Set the history in the local storage
    this._history = JSON.parse( localStorage.getItem('history')! ) || [];

    this.result = JSON.parse( localStorage.getItem('result')! ) || []; 
  }


  searchGift(query: string) {

    query = query.trim().toLowerCase()

    if(!this._history.includes(query)) {
      this._history.unshift(query)
      this._history = this._history.splice(0,10)
      localStorage.setItem('history', JSON.stringify(this._history))

    }

    const urlParams = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query)

    
    this.http.get<GiftApiResponse>(`${this.baseUrl}/search`, {params: urlParams})
    .subscribe((response) => {
      this.result = response.data
      localStorage.setItem('result', JSON.stringify(this.result))
    })

  }
}
