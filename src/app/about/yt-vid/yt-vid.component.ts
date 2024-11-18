import { Component } from '@angular/core';

@Component({
  selector: 'yt-vid',
  templateUrl: './yt-vid.component.html',
  styleUrls: ['./yt-vid.component.css']
})
export class YtVidComponent {
  videos: string[] = [
    'https://youtu.be/2mJNnMmDtpk?si=ggal0Pd3YkpD7ZgY',
    'https://www.youtube.com/embed/kJQP7kiw5Fk',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/sNPnbI1arSE',
    'https://www.youtube.com/embed/M7lc1UVf-VE',
    'https://www.youtube.com/embed/aqz-KE-bpKQ',
    'https://www.youtube.com/embed/2Vv-BfVoq4g',
    'https://www.youtube.com/embed/VbfpW0pbvaU',
    'https://www.youtube.com/embed/L_jWHffIx5E',
  ];
  currentIndex = 0;

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  }
}
