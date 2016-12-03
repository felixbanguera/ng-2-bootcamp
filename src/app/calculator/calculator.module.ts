import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonsitoComponent } from './shared/buttonsito/buttonsito.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorComponent, ButtonsitoComponent],
  exports: [CalculatorComponent, ButtonsitoComponent]
})
export class CalculatorModule { }
