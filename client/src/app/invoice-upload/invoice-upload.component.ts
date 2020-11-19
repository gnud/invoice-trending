import {Component, OnInit} from '@angular/core';
import {UploaderService} from './uploader.service';

@Component({
  selector: 'app-invoice-upload',
  templateUrl: './invoice-upload.component.html',
  styleUrls: ['./invoice-upload.component.scss'],
  providers: [ UploaderService ]
})
export class InvoiceUploadComponent implements OnInit {
  message: string;

  resultsMode = false;
  results = [];

  constructor(private uploaderService: UploaderService) {

  }

  ngOnInit(): void {

  }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        (data) => {
          input.value = null;
          this.resultsMode = true;
          const [response, msg] = data;

          this.results = (response as any).body.failed;
        }
      );
    }
  }

}
