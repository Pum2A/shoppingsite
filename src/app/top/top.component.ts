import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


const enterTransition =  transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({ opacity: 1})),
])

const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({ opacity: 0})),
])


const fadeIn =  trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  
  

  constructor() { }
  collapsed = true;


  visible:boolean = false;
  // visible2:boolean = false;
  // visible3:boolean = false;
  // visible4:boolean = false;
  // visible5:boolean = false;
  // visible6:boolean = false;
  visible7:boolean = false;

  



  onclick(){
    this.visible = !this.visible;
  }
  // onclick2(){
  //   this.visible2 = !this.visible2;
  // }
  // onclick3(){
  //   this.visible3 = !this.visible3;
  // }
  // onclick4(){
  //   this.visible4 = !this.visible4;
  // }
  // onclick5(){
  //   this.visible5 = !this.visible5;
  // }
  // onclick6(){
  //   this.visible6 = !this.visible6;
  // }
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
