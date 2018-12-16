import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ApplicationFormComponent
  ]
})
export class ApplicationFormModule { }
