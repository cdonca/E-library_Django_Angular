import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrkrimiComponent } from './zanrkrimi.component';

describe('ZanrkrimiComponent', () => {
  let component: ZanrkrimiComponent;
  let fixture: ComponentFixture<ZanrkrimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanrkrimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrkrimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
