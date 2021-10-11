import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') keywordTXT!: ElementRef<HTMLInputElement>;

  constructor(
    private _gifsService: GifsService
  ) { }

  search() {
    const query: string = this.keywordTXT.nativeElement.value;
    if (query) {
      this._gifsService.searchGifs(query);
      this.keywordTXT.nativeElement.value = '';
    }
  }
}
