import { Injectable, Input } from '@angular/core';
import { FilmItem } from './film-item.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmArray: FilmItem[] = [
    new FilmItem("Game night", "Horror, Synth", "https://www.youtube.com/embed/w7HgKDyuArY"),
    new FilmItem("Bedlam", "Horror, Orchestral", "https://www.youtube.com/embed/tR6M8aYbbLg"),
    new FilmItem("Zamarad", "Action", "https://www.youtube.com/embed/-sNIfxQsBxQ"),
    new FilmItem("Stiff Upper Lip", "Spy, Jazz", "https://www.youtube.com/embed/Xl6o5u3xSH8"),
    new FilmItem("The Bake In", "Jazz", "https://www.youtube.com/embed/CE-MhfwOK4c")]

  constructor() { }
}
