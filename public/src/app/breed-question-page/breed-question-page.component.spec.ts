import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedQuestionPageComponent } from './breed-question-page.component';

describe('BreedQuestionPageComponent', () => {
  let component: BreedQuestionPageComponent;
  let fixture: ComponentFixture<BreedQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
