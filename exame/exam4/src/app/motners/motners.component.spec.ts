import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotnersComponent } from './motners.component';

describe('MotnersComponent', () => {
  let component: MotnersComponent;
  let fixture: ComponentFixture<MotnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
