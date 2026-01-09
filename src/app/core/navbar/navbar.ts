import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  scrolled=false;
  @HostListener('window:scroll')
  onScroll(){
    this.scrolled=window.scrollY > 80;
  }
}
