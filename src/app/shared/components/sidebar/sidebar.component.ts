import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get record(): string[] {
    return this._gifsService.record;
  }

  constructor(
    private _gifsService: GifsService
  ) { }

  selectTXT(txt: string): void {
    this._gifsService.searchGifs(txt);
  }
}
