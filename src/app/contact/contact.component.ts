import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('form', { static: true } ) contactForm : NgForm;

  constructor() { }

  ngOnInit() {
  }

  onPost(postData: {name: string, email: string, message: string}) {
    console.log(postData);
  }
}
