import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {

  members = [
    { name: 'Kiran', role: 'Lead Designer', img: '/assets/kiran.jpg' },
    { name: 'Saanvi', role: 'Interior Specialist', img: '/assets/tanu.jpg' },
    { name: 'Tanvi', role: 'Fashion Consultant', img: '/assets/saanvi.jpg' }
  ];

}
