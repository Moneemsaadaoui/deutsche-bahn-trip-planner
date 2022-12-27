import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripServiceService } from 'src/app/services/trip-service/trip-service.service';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {

  @Input() data: any;

  @Output() polylineData: EventEmitter<any> = new EventEmitter();
  @Output() stops: EventEmitter<any> = new EventEmitter();


  PolyLine: any[] = [];
  constructor(private tripService: TripServiceService) { }

  ngOnInit(): void {
  }
  doGetTrips() {
    this.tripService.getTrip(this.data.tripId, this.data.line.name).subscribe(data => {
      data.polyline.features.forEach(element => {
        if (element.geometry.type == "Point") {
          this.PolyLine.push({ lat: parseFloat(element.geometry.coordinates[1] + ""), lng: parseFloat(element.geometry.coordinates[0] + "") })
        }

      });
      this.polylineData.emit(this.PolyLine)
      this.stops.emit(data.stopovers)

    })
  }

}
