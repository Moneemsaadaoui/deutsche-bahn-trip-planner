import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs';
import { AutoCompleteResult } from 'src/app/models/AutoCompleteResult.model';
import { AutocompleteServiceService } from 'src/app/services/autocomplete-service/autocomplete-service.service';
import { DeparturesServiceService } from 'src/app/services/departures-service/departures-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  test: any;
  selectedID: any;
  autocompleteSuggestions: any;
  isDisabled: boolean = false;
  date: Date = new Date();
  time: Date = new Date()
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(
    private _snackBar: MatSnackBar, private autocompleteService: AutocompleteServiceService,
    private departureService: DeparturesServiceService) { }
  Form = new FormControl();
  ngOnInit(): void {
    this.autocompleteSuggestions = []
    this.autocomplete();
  }


  autocomplete() {
    this.Form.valueChanges
      .pipe(
        filter(res => {
          return res != null && res != undefined
        }),
        distinctUntilChanged(),
        tap(() => {
          this.autocompleteSuggestions = [];
        }),
        switchMap(value => this.autocompleteService.getSuggestions(this.Form.value)

        )
      )
      .subscribe((res: AutoCompleteResult[]) => {
        this.autocompleteSuggestions = res
      });

  }
  onSelect(evt: any, item: any) {
    this.selectedID = item.id
  }

  DoSearch() {
    this.departureService.getDepartures(this.selectedID, this.consolidateDateTime()).subscribe(data => {
      this.open.emit(data)
    }, err => {
      if (!this.selectedID) {
        this._snackBar.open("Please make sure to fill the form before searching 🙏", "Dismiss");
      } else {
        this._snackBar.open("Something went wrong 😔", "Dismiss");

      }
    })
  }

  consolidateDateTime(): Date {
    let date = new Date()
    date.setTime(this.time.getTime())
    date.setFullYear(this.date.getFullYear(), this.date.getMonth(), this.date.getDate())

    return date
  }
  dateUpdate(evt: any) {
    this.date = new Date(evt.value)
  }
  timeUpdate(evt: any) {
    this.time = new Date()

    let parts = evt.match(/(\d+)\:(\d+) (\w+)/)
    let hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12
    let minutes = parseInt(parts[2], 10);

    this.time.setHours(hours, minutes, 0, 0)
    this.consolidateDateTime()
  }

}
