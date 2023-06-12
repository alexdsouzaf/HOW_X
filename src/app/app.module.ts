import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoVendasComponent } from './grafico-vendas/grafico-vendas.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { GraficoOrigemVendasComponent } from './grafico-origem-vendas/grafico-origem-vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoVendasComponent,
    TelaInicialComponent,
    GraficoOrigemVendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
