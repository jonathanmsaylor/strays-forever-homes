import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDogPageComponent } from './new-dog-page.component';

describe('NewDogPageComponent', () => {
  let component: NewDogPageComponent;
  let fixture: ComponentFixture<NewDogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
