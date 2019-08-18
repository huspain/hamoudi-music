export class FilmItem {
    title: string;
    genre: string;
    url: string;
    active: number;

    constructor(title: string, genre: string, url: string, active: number) {
        this.title = title;
        this.genre = genre;
        this.url = url;
        this.active = active;
    }
}



