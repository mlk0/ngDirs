import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.useWhiteOnRed = true;
    this.whiteOnRedItalicOf2Em = { whiteOnRed:this.useWhiteOnRed, italicFont:true};
   
  }
  size: string;
  title = 'app works!';

  numbers : number[];
  oddNumber : number;
  evenNumber : number;
  whiteOnRedItalicOf2Em : Object;
  useWhiteOnRed : boolean;

  color : string;

  updateColor(selectedColor : string, selectedSize : string){
    this.color = selectedColor;
    this.size = selectedSize + 'em';
    
  }

  constructor() { 
    this.numbers = [1,2,3,4,5,6,7,8,9,10];
    this.oddNumber = 3;
    this.evenNumber = 4;
  }
 


}
