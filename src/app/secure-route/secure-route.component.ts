import { Component } from '@angular/core';
import { AuthjwtService } from '../authjwt.service';

@Component({
  selector: 'app-secure-route',
  templateUrl: './secure-route.component.html',
  styleUrls: ['./secure-route.component.css']
})
export class SecureRouteComponent {
    msg: string = ''

    constructor(private jwtService: AuthjwtService){}

    ngOnInit(){
        this.jwtService.secureUrl().subscribe({
            next:(response)=>{
               console.log(response)
               this.msg = response.text
            },
            error:(reason)=>{
                alert(reason.message)
            }
        })
    }
}
