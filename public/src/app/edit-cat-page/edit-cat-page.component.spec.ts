import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatPageComponent } from './edit-cat-page.component';

describe('EditCatPageComponent', () => {
  let component: EditCatPageComponent;
  let fixture: ComponentFixture<EditCatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
