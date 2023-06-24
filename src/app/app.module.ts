import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoVendasComponent } from './grafico-vendas/grafico-vendas.component';
import { GraficoOrigemVendasComponent } from './grafico-origem-vendas/grafico-origem-vendas.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaSobreComponent } from './tela-sobre/tela-sobre.component';
import { TelaContatoComponent } from './tela-contato/tela-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoVendasComponent,
    GraficoOrigemVendasComponent,
    TelaLoginComponent,
    TelaSobreComponent,
    TelaContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
