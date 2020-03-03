import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComComponent } from './list-com.component';

describe('ListComComponent', () => {
  let component: ListComComponent;
  let fixture: ComponentFixture<ListComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
