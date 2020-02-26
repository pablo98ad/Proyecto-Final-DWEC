import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularPluralComponent } from './singular-plural.component';

describe('SingularPluralComponent', () => {
  let component: SingularPluralComponent;
  let fixture: ComponentFixture<SingularPluralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularPluralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularPluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
