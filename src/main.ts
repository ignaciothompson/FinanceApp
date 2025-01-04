import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { AppRoutingModule } from './app/app.routes';

import { importProvidersFrom } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



bootstrapApplication(AppComponent, {

  providers: [

    importProvidersFrom(AppRoutingModule, FormsModule, HttpClientModule, CommonModule)

  ]

}).catch(err => console.error(err));
