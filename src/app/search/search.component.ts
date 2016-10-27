import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ngOnInit(): void {
  }

  query: string;

  search() {
    console.log(this.query);
  }
}
