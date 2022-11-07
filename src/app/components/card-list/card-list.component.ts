import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { }
  items: any;
  ngOnInit(): void {
    this.items = [
      "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a",
    ]
  }

}
