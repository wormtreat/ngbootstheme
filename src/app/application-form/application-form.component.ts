import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.sass']
})
export class ApplicationFormComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Frank');
  }

}
