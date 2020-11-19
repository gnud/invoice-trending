import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import {Invoice} from './invoice';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class InvoiceService {
  invoiceUrl = '/invoice';  // URL to web api
  private readonly handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('InvoicesService');
  }

  /** GET invoices from the server */
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoiceUrl)
      .pipe(
        catchError(this.handleError('getInvoices', []))
      );
  }

  //////// Save methods //////////
  /** POST: add a new invoice to the database */
  addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.invoiceUrl, invoice, httpOptions)
      .pipe(
        catchError(this.handleError('addInvoice', invoice))
      );
  }
}
