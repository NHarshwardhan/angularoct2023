import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../chart.service';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends ChartBaseComponent {
      
  constructor(public override chartService: ChartService){
    super(chartService)
}

override createChart(): any {
   this.chart =  new Chart('MyChart',{
           type:'line',
           data:{
               labels: this.labelData,
               datasets:[
                  {
                    label: 'No of Sales',
                    data: this.realData,
                    backgroundColor: this.colorData,
                    
                  }
               ]
           },
           options:{
                aspectRatio: 2
           }
      })
     
}
}
