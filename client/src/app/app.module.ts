import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './messages/message.service';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { InvoiceUploadComponent } from './invoice-upload/invoice-upload.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    InvoicesComponent,
    MessagesComponent,
    InvoiceUploadComponent,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
