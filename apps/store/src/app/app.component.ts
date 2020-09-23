import { Component } from '@angular/core';
import { getAllGames } from './fake-api';
import { formatRating } from '@bg-board/store/util-formatters';

@Component({
  selector: 'bg-board-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
  formatRating = formatRating;

}
