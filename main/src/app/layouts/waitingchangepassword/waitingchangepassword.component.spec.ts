import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WaitingchangepasswordComponent} from "./waitingchangepassword.component";


describe('WaitingchangepasswordComponent', () => {
  let component: WaitingchangepasswordComponent;
  let fixture: ComponentFixture<WaitingchangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingchangepasswordComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
