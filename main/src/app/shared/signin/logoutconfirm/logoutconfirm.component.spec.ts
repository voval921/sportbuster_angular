import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutconfirmComponent } from './logoutconfirm.component';

describe('LogoutconfirmComponent', () => {
  let component: LogoutconfirmComponent;
  let fixture: ComponentFixture<LogoutconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
