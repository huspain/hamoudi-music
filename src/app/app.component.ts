import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'music-website';

  toggleMobileHeader: boolean = false;

  ngOnInit(){
    this.onResize();
  }


  @HostListener('window:resize')
    onResize() {
      const windowSize = window.innerWidth;

      if(windowSize <= 991) {
        this.toggleMobileHeader = true;
      }
      else {
        this.toggleMobileHeader = false;
      }
    }
}
