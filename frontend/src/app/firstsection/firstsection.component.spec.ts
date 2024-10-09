import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstsectionComponent } from './firstsection.component';

describe('FirstsectionComponent', () => {
  let component: FirstsectionComponent;
  let fixture: ComponentFixture<FirstsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
