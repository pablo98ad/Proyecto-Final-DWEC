import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluralesComponent } from './plurales.component';

describe('PluralesComponent', () => {
  let component: PluralesComponent;
  let fixture: ComponentFixture<PluralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
