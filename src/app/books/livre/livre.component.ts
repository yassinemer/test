import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';

@Component({
  selector: 'meri-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() l:Livre=new Livre;
  t:boolean=true;


finalPrice(){
this.t=!this.t;
return "le prix apres reduction est "

}
  constructor() { }

  ngOnInit(): void {
  }

}
