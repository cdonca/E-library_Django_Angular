import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanristComponent } from './zanrist.component';

describe('ZanristComponent', () => {
  let component: ZanristComponent;
  let fixture: ComponentFixture<ZanristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
