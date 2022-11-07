import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AutocompleteServiceService } from 'src/app/services/autocomplete-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  StationOption:any;
  autocompleteSuggestions: any;

  constructor(private autocompleteService: AutocompleteServiceService) { }

  ngOnInit(): void {
  }

  do(event: any) {
    console.log(event.target.value)
    this.autocompleteService.getSuggestions(event.target.value).subscribe(data => {
      this.autocompleteSuggestions = data
    })
  }


}
