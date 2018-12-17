import { Component } from '@angular/core';
export type EditorType = 'optionOne' | 'optionTwo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngBootstrap Theme';
  editor: EditorType = 'optionOne';

  get showOptionOne() {
    return this.editor === 'optionOne';
  }

  get showOptionTwo() {
    return this.editor === 'optionTwo';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
