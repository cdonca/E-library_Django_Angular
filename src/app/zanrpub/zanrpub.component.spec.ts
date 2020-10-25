import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrpubComponent } from './zanrpub.component';

describe('ZanrpubComponent', () => {
  let component: ZanrpubComponent;
  let fixture: ComponentFixture<ZanrpubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanrpubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
