import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() couleurPere="";
  @Output() dataToLoad = new EventEmitter();
  constructor() { }
    ngOnInit() {
  }
  sendData(){
    this.dataToLoad.emit("bonjour");
  }


}
