import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-lightbox',
  standalone: false,
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.css',
})
export class Lightbox {
visible = false;
  images: { src: string, caption?: string }[] = [];
  currentIndex = 0;
  src = '';
  caption = '';

  openMultiple(images: { src: string, caption?: string }[], startIndex: number = 0) {
    this.images = images;
    this.currentIndex = startIndex;
    this.updateImage();
    this.visible = true;
  }

  open(url: string, captionText: string = '') {
    this.images = [{ src: url, caption: captionText }];
    this.currentIndex = 0;
    this.updateImage();
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  prevImage() {
    if (this.images.length > 1) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateImage();
    }
  }

  nextImage() {
    if (this.images.length > 1) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateImage();
    }
  }

  private updateImage() {
    this.src = this.images[this.currentIndex].src;
    this.caption = this.images[this.currentIndex].caption || '';
  }
}

