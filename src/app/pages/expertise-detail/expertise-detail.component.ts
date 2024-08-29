import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertise-detail',
  standalone: true,
  imports: [],
  templateUrl: './expertise-detail.component.html',
  styleUrl: './expertise-detail.component.scss',
})
export class ExpertiseDetailComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/expertise']);
  }
}
