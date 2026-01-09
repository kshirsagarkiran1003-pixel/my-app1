import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-collection',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './gallery-collection.html',
  styleUrls: ['./gallery-collection.css']
})
export class GalleryCollection implements OnInit {
product:any;
//mainImage='';
  
  productsData = [
           {
       id: 1,
      name: 'Bedding',
      description: 'Elegant sheer curtain with soft texture.',
      images: [
        'assets/img/Bed.jpg',
        'assets/img/1002.jpg',
        'assets/img/1003.jpg','assets/img/1044.jpg','assets/img/1045.jpg',
        'assets/img/1046.jpg',
      ]
    },
    {
         id:2,
      name: 'Curtains',
      description:'luxury modern <br>vhvhjhbhkbhb ',
      images: [
        'assets/img/1008(1).jpg',
        'assets/img/1007.jpg',
                'assets/img/1008(2).jpg',
                'assets/img/1020.jpg', 'assets/img/1023.jpg',  'assets/img/1024.jpg',  'assets/img/1043.jpg',
                 'assets/img/1029.jpg', 'assets/img/1053.jpg',  'assets/img/Curtain Design 1034.jpg',
        'assets/img/Curtain Design 1037.jpg','assets/img/1012.jpg','assets/img/1013.png','assets/img/1017.jpg','assets/img/1019.jpg',
    'assets/img/1030.jpg','assets/img/1031-Sheer.jpg','assets/img/1049.jpg','assets/img/1056.jpg',
   'assets/img/Curtain Design 1064.jpg' , 'assets/img/Curtain Design 1065.jpg'





      ]
    },
    {
      id: 3,
      name: 'Sofa With Curtain',
      description:'luxury sofa',
      images: [
        'assets/img/Sofa 1.jpg',
       'assets/img/Sofa Black Background.jpg',
       'assets/img/Sofa 1.jpg',
       'assets/img/106.jpg','assets/img/1001.jpg','assets/img/1002.jpg','assets/img/1003.jpg',
'assets/img/1009.jpg','assets/img/1011.png','assets/img/1015.jpg','assets/img/1016.jpg','assets/img/1018.jpg','assets/img/1026.jpg',
'assets/img/1027.jpg','assets/img/1028.jpg','assets/img/1047.jpg','assets/img/1051.jpg',
      ]
      
    }
  ];


 constructor(private route: ActivatedRoute,private router:Router) {}
 
  ngOnInit(): void {
    

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product=this.productsData.find(p => p.id === id);/*p=>item*/
    /*if(this.product)
      {
         this.mainImage=this.product.images[0];
    
 }*/
}
   /* changeImage(img: string) {
    this.mainImage = img;
  }*/
 openImage(img: string) {
  this.router.navigate(
    ['/image-detail'],
    { state: { image: img, product: this.product } }
  );
}

  goBack(){
  this.router.navigate(['/gallery']);
 }
}




























     











