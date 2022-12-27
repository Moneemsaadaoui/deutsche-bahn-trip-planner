import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StopsListComponent } from './components/stops-list/stops-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { MapviewComponent } from './components/mapview/mapview.component';
import { CarditemComponent } from './components/carditem/carditem.component';
describe('AppComponent', () => {
  let component: AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSnackBarModule
      ],
      declarations: [
        StopsListComponent, SearchBoxComponent, MapviewComponent, CarditemComponent,
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Controls should be visible'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isControlsVisible).toBeTruthy()
  });


  it(`Controls should switch state on item click event'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.recievePolyline("test");
    expect(app.isControlsVisible).toEqual(false)
  });

  it(`Controls should switch state to being visible on item click event'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.goBack();
    expect(app.isControlsVisible).toEqual(true)
  });

});
