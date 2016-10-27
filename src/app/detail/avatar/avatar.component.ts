import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  source: string;

  ngOnInit() {
    this.source = 'http://demos.microdesign-web.com/sample_admin/assets/img/avatar.jpg';
  }

}
