import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  visible:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }


  onclick(){
    this.visible = !this.visible;
  }


}
