import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
personne:Personne;
  ngOnInit() {
  }

}
