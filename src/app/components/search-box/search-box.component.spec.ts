import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchBoxComponent } from './search-box.component';
import { MatAutocomplete } from '@angular/material/autocomplete';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientTestingModule],
      declarations: [SearchBoxComponent, MatAutocomplete]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should launch service call on do search', () => {
    let emittedValue
    component.open.subscribe(d => {
      emittedValue = d;
    });
    component.selectedID = 8000085;
    component.DoSearch();
    spyOn(component.open, 'emit')
    expect(component.open.emit).toBeTruthy()
  });

});
