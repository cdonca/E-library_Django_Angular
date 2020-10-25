import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrljubComponent } from './zanrljub.component';

describe('ZanrljubComponent', () => {
  let component: ZanrljubComponent;
  let fixture: ComponentFixture<ZanrljubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanrljubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrljubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
