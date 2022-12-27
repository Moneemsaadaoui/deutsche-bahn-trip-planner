import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsListComponent } from './stops-list.component';

describe('StopsListComponent', () => {
  let component: StopsListComponent;
  let fixture: ComponentFixture<StopsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
