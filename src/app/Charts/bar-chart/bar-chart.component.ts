import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base/chart-base.component';
import { ChartService } from '../chart.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent extends ChartBaseComponent {
     
           
      constructor(public override chartService: ChartService){
          super(chartService)
      }

      override createChart(): any {
         this.chart =  new Chart('MyChart',{
                 type:'bar',
                 data:{
                     labels: this.labelData,
                     datasets:[
                        {
                          label: 'No of Sales',
                          data: this.realData,
                          backgroundColor: this.colorData,
                          barThickness:40,
                        }
                     ]
                 },
                 options:{
                      aspectRatio: 2
                 }
            })
           
      }
}
