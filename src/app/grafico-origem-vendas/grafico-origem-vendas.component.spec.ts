import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoOrigemVendasComponent } from './grafico-origem-vendas.component';

describe('GraficoOrigemVendasComponent', () => {
  let component: GraficoOrigemVendasComponent;
  let fixture: ComponentFixture<GraficoOrigemVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoOrigemVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoOrigemVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
