import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CarditemComponent } from './carditem.component';

describe('CarditemComponent', () => {
  let component: CarditemComponent;
  let fixture: ComponentFixture<CarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CarditemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle no data being passed', () => {
    component.data = []
    expect(component).toBeTruthy();
  });
});
