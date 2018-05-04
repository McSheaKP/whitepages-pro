import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReversePhoneService } from './reverse-phone.service';
import { PhonedisplayComponent } from './phonedisplay/phonedisplay.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhonedisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReversePhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
