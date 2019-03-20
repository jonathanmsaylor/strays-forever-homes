import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDetailsPageComponent } from './cat-details-page.component';

describe('CatDetailsPageComponent', () => {
  let component: CatDetailsPageComponent;
  let fixture: ComponentFixture<CatDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
