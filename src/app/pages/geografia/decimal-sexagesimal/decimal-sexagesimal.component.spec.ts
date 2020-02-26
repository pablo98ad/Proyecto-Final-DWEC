import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalSexagesimalComponent } from './decimal-sexagesimal.component';

describe('DecimalSexagesimalComponent', () => {
  let component: DecimalSexagesimalComponent;
  let fixture: ComponentFixture<DecimalSexagesimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalSexagesimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalSexagesimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
