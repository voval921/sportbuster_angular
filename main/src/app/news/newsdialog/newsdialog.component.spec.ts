import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdialogComponent } from './newsdialog.component';

describe('NewsdialogComponent', () => {
  let component: NewsdialogComponent;
  let fixture: ComponentFixture<NewsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
