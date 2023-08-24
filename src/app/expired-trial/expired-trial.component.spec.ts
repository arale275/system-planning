import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredTrialComponent } from './expired-trial.component';

describe('ExpiredTrialComponent', () => {
  let component: ExpiredTrialComponent;
  let fixture: ComponentFixture<ExpiredTrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiredTrialComponent]
    });
    fixture = TestBed.createComponent(ExpiredTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
