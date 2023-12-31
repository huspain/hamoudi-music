import { Component, OnInit } from '@angular/core';
import { FilmService } from './film.service';
import { FilmItem } from './film-item.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmArray: FilmItem[];
  currentFilmUrl: string;
  currentActive: number = 0;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmArray = this.filmService.filmArray.slice();  
    this.currentFilmUrl = "https://www.youtube.com/embed/w7HgKDyuArY";  
  }

  changeFilm(url: string, active: number) {
    this.currentFilmUrl = url;
    this.currentActive = active;
  }
}
