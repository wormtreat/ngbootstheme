import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-option-one',
  templateUrl: './option-one.component.html',
  styleUrls: ['./option-one.component.sass']
})

export class OptionOneComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Frank');
  }
}
