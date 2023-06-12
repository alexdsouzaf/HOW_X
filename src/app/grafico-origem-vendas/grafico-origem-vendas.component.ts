import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-grafico-origem-vendas',
  templateUrl: './grafico-origem-vendas.component.html',
  styleUrls: ['./grafico-origem-vendas.component.css']
})
export class GraficoOrigemVendasComponent implements OnInit {
  ngOnInit(): void {
    this.gerarGrafico();
  }


  gerarGrafico(){
    type EChartsOption = echarts.EChartsOption;
  
    var chartDom = document.getElementById('grafico')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;
    
    option = {
      title: {
        text: 'Origem de Vendas',
        // subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Mecanismo de busca' },
            { value: 735, name: 'Anúncios patrocinados' },
            { value: 580, name: 'Redes Sociais' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    option && myChart.setOption(option);

  }
}
