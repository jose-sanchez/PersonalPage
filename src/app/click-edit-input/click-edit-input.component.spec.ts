import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEditInputComponent } from './click-edit-input.component';

describe('ClickEditInputComponent', () => {
  let component: ClickEditInputComponent;
  let fixture: ComponentFixture<ClickEditInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickEditInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickEditInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
