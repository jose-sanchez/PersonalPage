import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedImageComponent } from './linked-image.component';

describe('LinkedImageComponent', () => {
  let component: LinkedImageComponent;
  let fixture: ComponentFixture<LinkedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
