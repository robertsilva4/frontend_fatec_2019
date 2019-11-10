import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCategoriasComponent } from './nav-categorias.component';

describe('NavCategoriasComponent', () => {
  let component: NavCategoriasComponent;
  let fixture: ComponentFixture<NavCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
