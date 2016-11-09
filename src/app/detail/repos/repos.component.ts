import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../model/repo';

@Component({
  selector: 'repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input()
  repos: Repo[];

  constructor() { }

  ngOnInit() {

  }

}
