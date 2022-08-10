import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


const enterTransition =  transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.4s ease-in', style({ opacity: 1})),
])

const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.2s ease-out', style({ opacity: 0})),
])
const fadeIn =  trigger('fadeIn', [enterTransition ]);
const fadeOut = trigger('fadeOut', [exitTransition])
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],  
  animations: [fadeIn, fadeOut],
})
export class SideNavComponent implements OnInit {
  
  constructor() { }

  // text:boolean = true;
  visible:boolean = false;
  visible2:boolean = false;
  visible3:boolean = false;
  visible4:boolean = false;
  visible5:boolean = false;
  visible6:boolean = false;


  ngOnInit(): void {
  }

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
  
  isMenuOpened: boolean = false;
  toggleMenu():void{
    this.isMenuOpened = !this.isMenuOpened; 
  }
  clickedOutside(): void{
    this.isMenuOpened = false;
  }
  
}
