import { Component } from '@angular/core';
import { User } from './model/user';
import { Repo } from './model/repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  repos : Repo[];
}
