import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoOrigemVendasComponent } from './grafico-origem-vendas/grafico-origem-vendas.component';
import { GraficoVendasComponent } from './grafico-vendas/grafico-vendas.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaSobreComponent } from './tela-sobre/tela-sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: TelaLoginComponent },
  { path: 'grafico-vendas', component: GraficoVendasComponent },
  { path: 'grafico-origem-vendas', component: GraficoOrigemVendasComponent },
  { path: 'sobre', component: TelaSobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
