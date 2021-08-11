import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtGalleryComponent } from './art-gallery.component';

describe('ArtGalleryComponent', () => {
  let component: ArtGalleryComponent;
  let fixture: ComponentFixture<ArtGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
