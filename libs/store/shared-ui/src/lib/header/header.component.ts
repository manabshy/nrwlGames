import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-board-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title = '';
}
