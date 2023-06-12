import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraficoOrigemVendasComponent } from './grafico-origem-vendas/grafico-origem-vendas.component';
import { GraficoVendasComponent } from './grafico-vendas/grafico-vendas.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // { path: '', component: AppComponent },
  { path: 'grafico-vendas', component: GraficoVendasComponent },
  { path: 'inicio', component: TelaInicialComponent },
  { path: 'grafico-origem-vendas', component: GraficoOrigemVendasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
