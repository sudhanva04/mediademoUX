import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginpageModule} from './loginpage/loginpage.module';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routing';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginpageModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [AppComponent],
  exports:[LoginpageModule]
})
export class AppModule { }
