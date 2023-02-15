import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeadersComponent } from './menu-headers.component';

describe('MenuHeadersComponent', () => {
  let component: MenuHeadersComponent;
  let fixture: ComponentFixture<MenuHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
