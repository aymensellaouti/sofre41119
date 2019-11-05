import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpouleComponent } from './ampoule.component';

describe('AmpouleComponent', () => {
  let component: AmpouleComponent;
  let fixture: ComponentFixture<AmpouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
