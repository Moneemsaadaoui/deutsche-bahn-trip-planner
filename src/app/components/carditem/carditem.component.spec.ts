import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditemComponent } from './carditem.component';

describe('CarditemComponent', () => {
  let component: CarditemComponent;
  let fixture: ComponentFixture<CarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
