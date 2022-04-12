import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreCollectionComponent } from './restore-collection.component';

describe('RestoreCollectionComponent', () => {
  let component: RestoreCollectionComponent;
  let fixture: ComponentFixture<RestoreCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoreCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
