import { Component, OnInit } from '@angular/core';
import {User} from './user';


@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  user : User;

  constructor() { }

  ngOnInit() {
    this.user = new User('Dawid', 'ddyrcz');
  }

}
