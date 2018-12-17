import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationFormModule } from './application-form/application-form.module';
import { OptionTwoModule } from './option-two/option-two.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { OptionOneComponent } from './option-one/option-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    PaginationComponent,
    OptionOneComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ApplicationFormModule,
    OptionTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
