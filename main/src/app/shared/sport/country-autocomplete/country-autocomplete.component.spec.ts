import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAutocompleteComponent } from './country-autocomplete.component';

describe('CountryAutocompleteComponent', () => {
  let component: CountryAutocompleteComponent;
  let fixture: ComponentFixture<CountryAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
