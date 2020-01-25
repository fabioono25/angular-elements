import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiFormComponent } from './hi-form.component';

describe('HiFormComponent', () => {
  let component: HiFormComponent;
  let fixture: ComponentFixture<HiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
