import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedCollectionComponent } from './liked-collection.component';

describe('LikedCollectionComponent', () => {
  let component: LikedCollectionComponent;
  let fixture: ComponentFixture<LikedCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
