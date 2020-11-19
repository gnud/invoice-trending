import {Component, OnInit} from '@angular/core';

import {InvoiceService} from './invoice.service';
import {Invoice} from './invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  providers: [InvoiceService],
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];

  constructor(private heroesService: InvoiceService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getInvoices()
      .subscribe(invoices => (this.invoices = invoices));
  }


}
