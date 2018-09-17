import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentcardComponent } from './apartmentcard.component';

describe('ApartmentcardComponent', () => {
  let component: ApartmentcardComponent;
  let fixture: ComponentFixture<ApartmentcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
