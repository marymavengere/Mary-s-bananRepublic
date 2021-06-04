import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations'

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})


export class FirstFormComponent implements OnInit {
  
   
  name: string = '';
  email: string = '';
  date: string ='';
  customer: string = '';
  mobile: string = '';

   clear() {
      this.name = '';
      this.email= '';
      this.date='';
      this.customer ='';
      this.mobile ='';
    }

  ngOnInit(): void {     
  
  }


 

  public show: boolean = false;
  

  constructor()
  { 
   
   }
}


  

function formClear() {
  throw new Error('Function not implemented.');
}

function clear() {
  throw new Error('Function not implemented.');
}
 