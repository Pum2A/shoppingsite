import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  
  

  constructor() { }

  visible:boolean = false;
  visible7:boolean = false;


  onclick(){
    this.visible = !this.visible;
  }

  onclick7(){
    this.visible7 = !this.visible7;
    
  }

  ngOnInit(): void {
  }
  isMenuOpened: boolean = false;
  toggleMenu():void{
    this.isMenuOpened = !this.isMenuOpened; 
  }

}
