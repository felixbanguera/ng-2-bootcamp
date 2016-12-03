import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { AwsomePipe } from './awsome.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SharedComponent, AwsomePipe, HighlightDirective],
  exports: [AwsomePipe, HighlightDirective, CommonModule, FormsModule]
})
export class SharedModule { }
