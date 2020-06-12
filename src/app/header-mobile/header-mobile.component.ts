import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
  animations: [
    trigger('mobileMenuState', [
      transition(':enter', [
        style({ 
          'transform' : 'translateY(-300px)'
        }),
        animate('700ms ease-out', style({
          'transform' : 'translateY(0px)'
        }))
      ]),
      transition(':leave', [
        style({
          'transform' : 'translateY(0px)'
        }),
        animate('700ms ease-in', style({
          'transform' : 'translateY(-300px)'
        }))
      ])
    ])
  ]
})
export class HeaderMobileComponent implements OnInit {

  // toggle for mobile meny. True displays it. False hides it.
  mobileToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // Toggles the hidden mobile menu by switching the mobileToggle state.
  toggleMobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  }

}
