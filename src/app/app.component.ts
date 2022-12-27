import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trip-HW';
  poly: any;
  stops: any;
  bounds: any;
  data: any;
  showStops: boolean = true;
  isControlsVisible: boolean = true;
  StopMarker: any;

  onOpen(evt: any) {
    this.data = evt
  }


  recievePolyline(evt: any) {
    this.isControlsVisible = false
    this.poly = {
      path: [...evt],
      strokeColor: '#e33922',
      strokeOpacity: 1.0,
      strokeWeight: 5,
    };
  }
  receiveStops(evt: any) {
    this.stops = evt
  }
  receiveStopMarker(evt: any) {
    this.StopMarker = evt
  }
  goBack() {
    this.isControlsVisible = true
  }
  ToggleStops() {
    if (this.showStops) {
      this.showStops = false
    } else {
      this.showStops = true
    }
  }
}
