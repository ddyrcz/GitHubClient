import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  @Input()
  avatarUrl: string;

  ngOnInit() {
  }

}
