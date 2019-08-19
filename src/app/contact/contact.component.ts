import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger('thankYou', [
      transition(':enter', [   
        style({opacity:0}),
        animate(500, style({
          opacity:1
        })) 
      ]),
      transition(':leave', [  
        style({opacity:1}),
        animate(500, style({
          opacity:0
        })) 
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('form', { static: true } ) contactForm : NgForm;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onPost(postData: {name: string, email: string, subject: string, message: string}) {

    this.http.post('https://hamoudi-digital.firebaseio.com/music.json', postData).subscribe()

    this.contactForm.reset();
  }
}
