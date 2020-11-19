import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceUploadComponent } from './invoice-upload/invoice-upload.component';


const routes: Routes = [
      { path: 'invoices', component: InvoicesComponent },
      { path: 'invoices/upload', component: InvoiceUploadComponent },
      { path: '',   redirectTo: '/', pathMatch: 'full' },
      // { path: '**', component:  InvoicesComponent} // Reserved for 404
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
