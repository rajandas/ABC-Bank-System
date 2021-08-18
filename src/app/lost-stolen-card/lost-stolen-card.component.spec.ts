import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostStolenCardComponent } from './lost-stolen-card.component';

describe('LostStolenCardComponent', () => {
  let component: LostStolenCardComponent;
  let fixture: ComponentFixture<LostStolenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostStolenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostStolenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
