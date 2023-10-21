import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartBaseComponent } from '../chart-base/chart-base.component';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent extends ChartBaseComponent {
      
  constructor(public override chartService: ChartService){
    super(chartService)
}

override createChart(): any {
   this.chart =  new Chart('MyChart',{
           type:'pie',
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