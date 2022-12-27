import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stops-list',
  templateUrl: './stops-list.component.html',
  styleUrls: ['./stops-list.component.css']
})
export class StopsListComponent implements OnInit {
  @Input() data: any;
  @Output() stopMarker: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  doPlaceMarker() {
    this.stopMarker.emit({
      position: { lat: this.data.stop.location.latitude, lng: this.data.stop.location.longitude }, label:
      {
        color: "white",
        text: this.data.stop.name
      }
    })
  }

}
