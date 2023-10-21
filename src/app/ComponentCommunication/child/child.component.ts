import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
      @Input() parentMsg='';

      @Output() childEvent = new EventEmitter();
      
      language = {lang: 'English'}


      reply(){
          this.childEvent.emit(this.language)
      }

}
