import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategalleryComponent } from './updategallery.component';

describe('UpdategalleryComponent', () => {
  let component: UpdategalleryComponent;
  let fixture: ComponentFixture<UpdategalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdategalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
