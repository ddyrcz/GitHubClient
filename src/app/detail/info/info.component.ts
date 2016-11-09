import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
