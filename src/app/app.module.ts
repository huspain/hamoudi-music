import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { FilmComponent } from './film/film.component';
import { ContactComponent } from './contact/contact.component';
import { FilmItemComponent } from './film/film-item/film-item.component';
import { SafeUrlPipe } from './safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    DemoComponent,
    FilmComponent,
    ContactComponent,
    FilmItemComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
