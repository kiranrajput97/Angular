import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBirthdayComponent } from './pipe-birthday.component';

describe('PipeBirthdayComponent', () => {
  let component: PipeBirthdayComponent;
  let fixture: ComponentFixture<PipeBirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeBirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
