import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpertiseServiceService } from '../../services/ExpertiseService/expertise-service.service';

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
    private expertiseService: ExpertiseServiceService
  ) {
    this.items = this.expertiseService.getData();
    console.log(this.items.expertise);
  }
  naviagete(path: string) {
    this.router.navigate(['/expertise/', path]);
  }
}
