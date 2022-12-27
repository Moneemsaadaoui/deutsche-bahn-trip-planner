import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewComponent } from './mapview.component';

describe('MapviewComponent', () => {
  let component: MapviewComponent;
  let fixture: ComponentFixture<MapviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MapviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should handle no data being passed', () => {
    component.poly = null
    component.stop = null
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
