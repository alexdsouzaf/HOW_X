import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-grafico-vendas',
  templateUrl: './grafico-vendas.component.html',
  styleUrls: ['./grafico-vendas.component.css']
})
export class GraficoVendasComponent implements OnInit {
  
  ngOnInit(): void {
    this.gerar();
  }

  

  gerar(){
    type EChartsOption = echarts.EChartsOption;
  
    var chartDom = document.getElementById('grafico')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;
    option = {
      title: {
        text: 'Faturamento ao longo do mês'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['semana1', 'semana2', 'semana3', 'semana4']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [1500, 2000, 32400, 21800],
          type: 'line'
        }
      ]
    };
  
    option && myChart.setOption(option);
  }
}
