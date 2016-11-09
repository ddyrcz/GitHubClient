import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../model/user';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'search',
  providers: [GithubService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  displayUserRequest = new EventEmitter<User>();

  constructor(private service: GithubService) {

  }

  user: User;

  ngOnInit(): void {
  }

  search(query: string) {
    this.user = this.service.get(query);
    this.displayUserRequest.emit(this.user);
  }
}
