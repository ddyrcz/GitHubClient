import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  login : string;
  name : string;

  setup(user : any) : void{

  }

  constructor() { }

  ngOnInit() {
    this.name = 'Dawid'
    this.login = 'ddyrcz';
  }

}
