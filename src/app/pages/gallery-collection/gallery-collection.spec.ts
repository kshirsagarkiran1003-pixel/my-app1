import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCollection } from './gallery-collection';

describe('GalleryCollection', () => {
  let component: GalleryCollection;
  let fixture: ComponentFixture<GalleryCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
