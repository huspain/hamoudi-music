import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() filmItemUrl: string = "";

  constructor() { }

  ngOnInit() {
  }
}
