import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedTransactionComponent } from './disputed-transaction.component';

describe('DisputedTransactionComponent', () => {
  let component: DisputedTransactionComponent;
  let fixture: ComponentFixture<DisputedTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputedTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputedTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
