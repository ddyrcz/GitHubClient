import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loginType: string[] = ['Normal', 'Facebook',
    'LinkedIn'];

  user: User = new User('ddyrcz', 'dd', 'Dawid');

  submitted: boolean = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }



}
