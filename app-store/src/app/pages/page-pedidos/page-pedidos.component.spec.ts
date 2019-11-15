import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePedidosComponent } from './page-pedidos.component';

describe('PagePedidosComponent', () => {
  let component: PagePedidosComponent;
  let fixture: ComponentFixture<PagePedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
