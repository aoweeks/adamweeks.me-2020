import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResourceMissingPageComponent } from './resource-missing-page.component';

describe('ResourceMissingPageComponent', () => {
  let component: ResourceMissingPageComponent;
  let fixture: ComponentFixture<ResourceMissingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceMissingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMissingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
