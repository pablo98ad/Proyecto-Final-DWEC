import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGeografiaComponent } from './menu-geografia.component';

describe('MenuGeografiaComponent', () => {
  let component: MenuGeografiaComponent;
  let fixture: ComponentFixture<MenuGeografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGeografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGeografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
