import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _url: string = 'https://api.giphy.com/v1/gifs';
  private _apiKey: string = 'xmx0mzlhqixfgPIvlDldYt7zk5gFSioy';
  private _record: string[] = [];
  public results: Gif[] = [];


  get record() {
    return [...this._record];
  }

  constructor(
    private _httpClient: HttpClient
  ) {
    this._record = JSON.parse(localStorage.getItem('record')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query: string) {
    const url = `${this._url}/search`;
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    query = query.trim().toLowerCase();

    if (!this._record.includes(query)) {
      this._record.unshift(query);
      this._record = this._record.splice(0, 10);

      localStorage.setItem('record', JSON.stringify(this._record));
    }
    this._httpClient
      .get<SearchGifsResponse>(url, { params })
      .subscribe(res => {
        console.log(res.data);
        this.results = res.data;
        localStorage.setItem('results', JSON.stringify(res.data));
      });
  }
}
