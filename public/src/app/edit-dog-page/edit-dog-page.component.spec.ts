import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDogPageComponent } from './edit-dog-page.component';

describe('EditDogPageComponent', () => {
  let component: EditDogPageComponent;
  let fixture: ComponentFixture<EditDogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
