import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionTwoComponent } from './option-two.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OptionTwoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    OptionTwoComponent
  ]
})
export class OptionTwoModule { }
