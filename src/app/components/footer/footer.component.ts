import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalCoverageServiceService } from '../../services/GlobalCoverageService/global-coverage-service.service';
import { IndustriesServiceService } from '../../services/IndustriesService/industries-service.service';
import { ExpertiseServiceService } from '../../services/ExpertiseService/expertise-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  globalCoverage: any;
  industries: any;
  expertise: any;
  constructor(
    private router: Router,
    private globalCoverageService: GlobalCoverageServiceService,
    private industriesService: IndustriesServiceService,
    private expertiseService: ExpertiseServiceService
  ) {
    this.globalCoverage = this.globalCoverageService.getData();
    this.industries = this.industriesService.getData();
    this.expertise = this.expertiseService.getData();
  }

  navigate(path: string, page: string) {
    switch (page) {
      case 'Expertise':
        this.router.navigate(['/expertise/', path]);
        break;
      case 'Industrie':
        this.router.navigate(['/industrie', path]);
        break;
      case 'Global Coverage':
        this.router.navigate(['/global-coverage/', path]);
        break;
      case '':
        this.router.navigate(['/', path]);
        break;
    }
  }
}
