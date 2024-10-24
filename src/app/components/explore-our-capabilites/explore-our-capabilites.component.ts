import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore-our-capabilites',
  standalone: true,
  imports: [],
  templateUrl: './explore-our-capabilites.component.html',
  styleUrl: './explore-our-capabilites.component.scss',
})
export class ExploreOurCapabilitesComponent {
  items: any;
  constructor(
    private router: Router,
   
  ) {
  }
  naviagete(path: string) {
    this.router.navigate(['/expertise/', path]);
  }
}
