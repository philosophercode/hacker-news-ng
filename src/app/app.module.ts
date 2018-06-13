import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';


// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // NgbModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
