import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElibraryComponent } from './elibrary.component';

describe('ElibraryComponent', () => {
  let component: ElibraryComponent;
  let fixture: ComponentFixture<ElibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
