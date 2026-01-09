import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
}



@Component({
  selector: 'app-image-detail',
  imports:[CommonModule,RouterModule],
standalone:true,
  templateUrl: './image-detail.html',
  styleUrl: './image-detail.css',
})
export class ImageDetail implements OnInit{

product!: any;
image!:string;

constructor(private router:Router ){}

ngOnInit(): void {
  const state = history.state;
  this.image=state.image;
  this.product=state.product;

  if(!this.image || !this.product){

    this.router.navigate(['/gallery']);
}
}

changeImage(img: string) {
  this.image = img;
}

goBack() {
  this.router.navigate(['/gallery-collection', this.product.id]);
}

}
