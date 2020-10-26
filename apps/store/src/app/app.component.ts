import { Component } from '@angular/core';
import { getAllGames } from './fake-api';
import { formatRating } from '@bg-board/store/util-formatters';
import { Game } from '@bg-board/util-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-board-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'Board Game Hoard';
  games = this.http.get<Game[]>('/api/games');
  formatRating = formatRating;
}
