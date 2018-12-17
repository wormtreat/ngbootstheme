import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.sass']
})

export class ApplicationFormComponent {
  nameForm = this.fb.group({
    firstName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  updateName() {
    this.nameForm.patchValue({
      firstName: 'Frank'
    });
  }
}
