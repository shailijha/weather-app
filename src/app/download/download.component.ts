import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  downloadClickCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  download() {
    this.downloadClickCount++;
    console.log('Download clicked ', this.downloadClickCount);
  }
}
