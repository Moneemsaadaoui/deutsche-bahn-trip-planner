import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {

  @Input() title: any;
  constructor() { }

  ngOnInit(): void {
  }

}
