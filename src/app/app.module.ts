// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { StrengthTestComponent } from './components/strength-test/strength-test.component';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent, StrengthTestComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
