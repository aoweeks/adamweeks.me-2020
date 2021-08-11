import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeGalleryComponent } from './code-gallery.component';

describe('CodeGalleryComponent', () => {
  let component: CodeGalleryComponent;
  let fixture: ComponentFixture<CodeGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
