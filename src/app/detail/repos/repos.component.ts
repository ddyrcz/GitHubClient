import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Repo[];

  constructor() { }

  ngOnInit() {
    this.repos = [
      new Repo('Connections', 'Social web page based on Angular2 and Node.js'),
      new Repo('Weather', 'Weather system using Dark Sky API'),
      new Repo('Dashboard', 'Dashboard page for observing connected computes\' OS parameters, such as free memory available'),
    ]
  }

}
