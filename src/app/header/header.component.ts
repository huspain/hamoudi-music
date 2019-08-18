import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  activeState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event: any) {
      const scrollPosition = window.pageYOffset;

      if(scrollPosition >= 1){
        this.activeState = true;
      }
      else {
        this.activeState = false
      }
    }
}
