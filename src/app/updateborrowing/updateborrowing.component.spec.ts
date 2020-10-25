import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateborrowingComponent } from './updateborrowing.component';

describe('UpdateborrowingComponent', () => {
  let component: UpdateborrowingComponent;
  let fixture: ComponentFixture<UpdateborrowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateborrowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateborrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
