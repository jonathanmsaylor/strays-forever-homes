import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatPageComponent } from './new-cat-page.component';

describe('NewCatPageComponent', () => {
  let component: NewCatPageComponent;
  let fixture: ComponentFixture<NewCatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
