import { Component, OnInit } from '@angular/core';
import {Repo} from './repo';

@Component({
  selector: 'repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos : Repo[]; 

  constructor() { }

  ngOnInit() {
    this.repos =[
      new Repo('Squares', 'Desc'),
      new Repo('GithubClient', 'Desc'),
      new Repo('Weather', 'Desc')
    ]
  }

}
