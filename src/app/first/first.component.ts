import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
name ='sofrecom';
message='afficher';
isShown=false;
couleur='red';
  ngOnInit() {
    console.log(this.isShown)
  }
  getIsShown(){
    return this.getIsShown;}
    toogle(maVar){
      this.isShown=!this.isShown ;
      (this.message === 'afficher')? this.message='cacher':this.message='afficher';
      console.log(maVar) ;
    }
    changeColor(color){
 this.couleur= color.value ;
 console.log(color.value);
    }
    test(message){
alert(message);
    }

}
