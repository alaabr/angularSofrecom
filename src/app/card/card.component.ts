import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

@Input() name="John marvel";
jobTitle="CEO" ;
jobDescription="Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others";
status="I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"
  ngOnInit() {
  }

}
