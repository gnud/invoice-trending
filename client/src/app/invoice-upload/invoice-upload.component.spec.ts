import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUploadComponent } from './invoice-upload.component';
import {HttpErrorHandler} from '../http-error-handler.service';
import {MessageService} from '../messages/message.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InvoiceUploadComponent', () => {
  let component: InvoiceUploadComponent;
  let fixture: ComponentFixture<InvoiceUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ InvoiceUploadComponent ],
      providers: [
        HttpErrorHandler,
        MessageService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
