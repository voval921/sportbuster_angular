import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingconfirmComponent } from './waitingconfirm.component';

describe('WaitingconfirmComponent', () => {
  let component: WaitingconfirmComponent;
  let fixture: ComponentFixture<WaitingconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
