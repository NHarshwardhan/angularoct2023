import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {
    
  @Input() All:any
  @Input() Male:any
  @Input() Female:any

  @Output() childEvent = new EventEmitter()

  selectedRadioButton=''

  onRadioButtonSelected(){
    // console.log(this.selectedRadioButton)
     this.childEvent.emit(this.selectedRadioButton)

  }
}
