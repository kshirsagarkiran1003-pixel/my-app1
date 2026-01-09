import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isscrolled=false;
  @HostListener('window:scroll')
  onScroll(){
    this.isscrolled=window.scrollY > 50;
  }
}
