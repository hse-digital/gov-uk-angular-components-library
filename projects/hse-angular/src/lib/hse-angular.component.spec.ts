import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseAngularComponent } from './hse-angular.component';

describe('HseAngularComponent', () => {
  let component: HseAngularComponent;
  let fixture: ComponentFixture<HseAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HseAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HseAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
