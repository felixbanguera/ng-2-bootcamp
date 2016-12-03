import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttonsito',
  templateUrl: './buttonsito.component.html',
  styleUrls: ['./buttonsito.component.css']
})
export class ButtonsitoComponent implements OnInit {
  @Input() configuration = {clase: '', valor: null, isEqual: false};
  @Output() buttonChanged = new EventEmitter<string>();
  @Output() evaluatePressed = new EventEmitter<string>();
  @Output() clearValues = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  executeButton(){
    if(this.configuration.valor !== 'clear'){
      if (this.configuration.isEqual){
        this.evaluatePressed.emit();
      }else{
        this.buttonChanged.emit(this.configuration.valor);
      }
    }else{
      this.clearValues.emit();
    }    
  }

}
