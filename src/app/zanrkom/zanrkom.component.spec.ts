import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrkomComponent } from './zanrkom.component';

describe('ZanrkomComponent', () => {
  let component: ZanrkomComponent;
  let fixture: ComponentFixture<ZanrkomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanrkomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrkomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
