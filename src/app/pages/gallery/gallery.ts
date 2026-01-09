/*import { Component } from '@angular/core';
/*import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  products = [
    {
      id: 'fiora-fio19901a',name: 'Fiora', category: 'Curtains', image: 'assets/img/1001.jpg'
    },
    {
      id: 'velora-102', name: 'Velora', category: 'Curtains', image: 'assets/img/1002.jpg'
    },
    {
      id: 'curtain',name: 'Velora',category: 'Curtains', image: 'assets/img/1003.jpg'
    },

  ];

  constructor(private router: Router) {}

  openProduct(p: any) {
    this.router.navigate(['/gallery-collection', p.id]);
  }
}*/






/*import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  constructor(private router: Router) {}

  productsData = [
    {
            id: 'fiora-fio19901a',
            name: 'Curtains',
            image: 'assets/img/curtain.jpg',
      
    },
    {
            id: 'fiora-fio19901a',
            name: 'Curtains',
            image: 'assets/img/1003.jpg',
      
    },
    {
            id: 'fiora-fio19901a',
            name: 'Curtains',
            image: 'assets/img/1002.jpg',
      
    },
    
  ];

  openCollection(id:string) {
    this.router.navigate(['/gallery-collection', id]);
  }
}*/






import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})

export class Gallery {

  @ViewChild('galleryTrack', { static: false }) galleryTrack!: ElementRef;
  constructor(private router:Router) {}

  productsData = [
    {
      id: 1,
      name: 'Bedding',
      image: 'assets/img/Bed.jpg',
      dark: true
    },
    {
      id: 2,
      name: ' Curtains',
      image: 'assets/img/curtain.jpg',
      dark: true
    },
    {
      id: 3,
      name: 'Sofa With Curtain',
      image: 'assets/img/Sofa 1.jpg',
      dark: true
    }
  ];

  scrollLeft() {
    this.galleryTrack.nativeElement.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.galleryTrack.nativeElement.scrollBy({
      left: 350,
      behavior: 'smooth'
    });
  }

  openCollection(product:any) {
    this.router.navigate(['/gallery-collection', product.id],
      {state:{product}}
    );
  }
}









































/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  category: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  activeCategory = 'all';

  images: GalleryImage[] = [
    {
      src: 'assets/img/1001.jpg',
      category: 'modern',
      title: 'Modern Living',
      desc: 'Elegant modern interior'
    },
    {
      src: 'assets/img/1002.jpg',
      category: 'interior',
      title: 'Interior Design',
      desc: 'Premium interior styling'
    },
    {
      src: 'assets/img/1003.jpg',
      category: 'fabric',
      title: 'Fabric Design',
      desc: 'Luxury fabric collection'
    },
    {
      src: 'assets/img/1004-1.jpg',
      category: 'fashion',
      title: 'Fashion Studio',
      desc: 'Designer fashion wear'
    },
    {
      src: 'assets/img/1007.jpg',
      category: 'art',
      title: '3D Art',
      desc: 'Creative 3D visuals'
    }
  ];

  get filteredImages() {
    return this.activeCategory === 'all'
      ? this.images
      : this.images.filter(img => img.category === this.activeCategory);
  }

  filter(category: string) {
    this.activeCategory = category;
  }
}*/



































































































































/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery implements OnInit {

  images: GalleryImage[] = [];
  visibleImages: GalleryImage[] = [];
  loadCount = 4;
  lightboxVisible = false;
  currentIndex = 0;

  ngOnInit(): void {
    this.images = [
      { src: 'assets/img/1001.jpg' },
      { src: 'assets/img/1002.jpg' },
      { src: 'assets/img/1003.jpg' },
      { src: 'assets/img/1004-1.jpg' },
      { src: 'assets/img/1011.png' },
      { src: 'assets/img/1004-2.jpg' },
      { src: 'assets/img/1007.jpg' },
      { src: 'assets/img/1008(2).jpg'},
            { src: 'assets/img/1008((1).jpg'},{ src: 'assets/img/1009.jpg'}, { src: 'assets/img/1012.jpg'},
            { src: 'assets/img/1013.png'}, { src: 'assets/img/1020.jpg'}, { src: 'assets/img/1054.jpg'},
            { src: 'assets/img/Bed.jpg'}, { src: 'assets/img/1015.jpg'}, { src: 'assets/img/1016.jpg'},
      { src: 'assets/img/1017.jpg'},{ src: 'assets/img/1018.jpg'}, { src: 'assets/img/1019.jpg'},
      { src: 'assets/img/1020.jpg'},{ src: 'assets/img/1023.jpg'}, { src: 'assets/img/1024.jpg'},
      { src: 'assets/img/1025.jpg'},{ src: 'assets/img/1026.jpg'},{ src: 'assets/img/1027.jpg'},
      { src: 'assets/img/1028.jpg'},{ src: 'assets/img/1029.jpg'},{ src: 'assets/img/1030.jpg'},
   { src: 'assets/img/1031-Sheer.jpg'},




];

    this.visibleImages = this.images.slice(0, this.loadCount);
  }

  loadMore(): void {
    this.loadCount += 4;
    this.visibleImages = this.images.slice(0, this.loadCount);
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxVisible = true;
  }

  closeLightbox() {
    this.lightboxVisible = false;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex < this.visibleImages.length - 1 ? this.currentIndex + 1 : 0;
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.visibleImages.length - 1;
  }
}*/
