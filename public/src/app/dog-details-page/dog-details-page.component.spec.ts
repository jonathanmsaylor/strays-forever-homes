import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailsPageComponent } from './dog-details-page.component';

describe('DogDetailsPageComponent', () => {
  let component: DogDetailsPageComponent;
  let fixture: ComponentFixture<DogDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
