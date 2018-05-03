import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonedisplayComponent } from './phonedisplay.component';

describe('PhonedisplayComponent', () => {
  let component: PhonedisplayComponent;
  let fixture: ComponentFixture<PhonedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
