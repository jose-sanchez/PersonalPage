import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedImage.ComponentComponent } from './linked-image.component.component';

describe('LinkedImage.ComponentComponent', () => {
  let component: LinkedImage.ComponentComponent;
  let fixture: ComponentFixture<LinkedImage.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedImage.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedImage.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
