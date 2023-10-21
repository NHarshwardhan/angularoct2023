import { Component } from '@angular/core';
import { ChartService } from '../Charts/chart.service';

@Component({
  selector: 'app-check-chart',
  templateUrl: './check-chart.component.html',
  styleUrls: ['./check-chart.component.css']
})
export class CheckChartComponent {
   
    chartInfo: any
    public options: any;
    

  constructor(private http: ChartService) {
      
        this.updateOptions()
  }

   ngOnInit(){
          this.http.getChartInfo().subscribe({
            next:(response)=>{
              this.chartInfo = response
             
            },
            error:(reason)=>{

            }
            
        })
      
      
   }

  updateOptions() {
    console.log(this.chartInfo)
    this.options = {
      data: this.chartInfo,
      series: [{
        type: "column",
          xKey: 'year',
          yKey: 'amount',
         
      }]
    };
  }
  
}
