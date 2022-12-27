import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})

export class MapviewComponent implements OnInit {
  @Input() poly: any;
  @Input() bounds: any;
  @Input() stop: any;

  map: google.maps.Map | undefined;
  @ViewChild('mapel', { static: false }) googlemaps: GoogleMap | undefined;
  markers: any[];
  zoom: number;

  polylineOptions: any;
  constructor() {
    this.markers = [];
    this.zoom = 2;
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.googlemaps?.googleMap?.setCenter({ lat: 51.0671861, lng: 11.5923074 })

  }

  ngOnChanges(changes: any) {

    this.googlemaps?.googleMap?.moveCamera({
      tilt: 0,
      heading: 0,
      zoom: 10,
      center: this.poly.path[0],
    })
    this.markers = []
    this.markers.push({
      position: this.poly.path[0],
      label: {
        color: "white",
        text: "Start"
      }
    });
    this.markers.push({
      position: this.poly.path[this.poly.path.length - 1],
      label: {
        color: "white",
        text: "Finish"
      }
    });

  }
}
