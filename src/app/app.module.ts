import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ApplicationFormModule } from './application-form/application-form.module';
import { OptionTwoComponent } from './option-two/option-two.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    PaginationComponent,
    OptionTwoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ApplicationFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
