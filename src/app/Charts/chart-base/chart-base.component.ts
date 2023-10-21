import { Component } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart-base',
  templateUrl: './chart-base.component.html',
  styleUrls: ['./chart-base.component.css']
})
export class ChartBaseComponent {

    public chart: any
    public chartInfo: any
    public labelData: any
    public realData: any
    public colorData: any

    constructor(public chartService: ChartService){}

    ngOnInit(){
      console.log('Inside ngOnInit')
        // this.chartService.getChartInfo().subscribe({
        //     next:(response)=>{
        //         this.chartInfo = response

        //         if(this.chartInfo !== null){
        //             for(let i = 0; i<this.chartInfo.length; i++){
        //                 console.log('loop triggered')
        //                 this.labelData.push(this.chartInfo[i].year)
        //                 this.realData.push(this.chartInfo[i].amount)
        //                 this.colorData.push(this.chartInfo[i].colorcode)
        //             }
                 
        //             this.createChart()
                  
        //         }
        //     },
        //     error:(reason)=>{

        //     }
        // })

         this.chartService.getChartInfo().subscribe({
            next:(response)=>{
                this.chartInfo = response
                this.labelData = this.chartInfo.map((c:any)=> c.year)
                this.realData = this.chartInfo.map((c:any)=> c.amount)
                this.colorData = this.chartInfo.map((c:any)=> c.colorcode)

                this.createChart()
            },
            error:(reason)=>{

            }
        })
  
    }
    createChart(){}
}
