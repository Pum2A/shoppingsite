import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor() { }
  collapsed = true;


  visible:boolean = false;
  visible2:boolean = false;
  visible3:boolean = false;
  visible4:boolean = false;
  visible5:boolean = false;
  visible6:boolean = false;
  visible7:boolean = false;



  onclick(){
    // this.text = !this.text;
    this.visible = !this.visible;
  }
  onclick2(){
    // this.text = !this.text;
    this.visible2 = !this.visible2;
  }
  onclick3(){
    // this.text = !this.text;
    this.visible3 = !this.visible3;
  }
  onclick4(){
    // this.text = !this.text;
    this.visible4 = !this.visible4;
  }
  onclick5(){
    // this.text = !this.text;
    this.visible5 = !this.visible5;
  }
  onclick6(){
    // this.text = !this.text;
    this.visible6 = !this.visible6;
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
  closeSidenav(){
    
  }
}
