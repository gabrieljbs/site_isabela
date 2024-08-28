import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalCoverageServiceService } from '../../services/GlobalCoverageService/global-coverage-service.service';
import { IndustriesServiceService } from '../../services/IndustriesService/industries-service.service';
import { ExpertiseServiceService } from '../../services/ExpertiseService/expertise-service.service';

@Component({
  selector: 'app-select-nav',
  standalone: true,
  imports: [],
  templateUrl: './select-nav.component.html',
  styleUrl: './select-nav.component.scss',
})
export class SelectNavComponent {
  @Input() dataInput = '';

  globalCoverage: any;
  industries: any;
  expertise: any;

  isActive = true;

  data: any[] = [];
  itemData: any[] = [];

  page: string = '';

  constructor(
    private globalCoverageService: GlobalCoverageServiceService,
    private industriesService: IndustriesServiceService,
    private expertiseService: ExpertiseServiceService,
    private router: Router
  ) {
    this.globalCoverage = this.globalCoverageService.getData();
    this.industries = this.industriesService.getData();
    this.expertise = this.expertiseService.getData();

    this.data.push(this.expertise);
    this.data.push(this.industries);
    this.data.push(this.globalCoverage);

  
  }

  ngOnInit() {}

  openData() {}

  openGlobal(name: string) {
    switch (name) {
      case 'Expertise':
        this.itemData.pop();
        this.itemData.push(this.expertise.expertise);
        this.page = name;
        break;
      case 'Industrie':
        this.itemData.pop();
        this.itemData.push(this.industries.industrie);
        this.page = name;
        break;
      case 'Global Coverage':
        this.itemData.pop();
        this.itemData.push(this.globalCoverage.continents);
        this.page = name;
        break;
    }
  }
  navigate(path: string) {
    switch (this.page) {
      case 'Expertise':
        this.router.navigate(['/', path]);
        break;
      case 'Industrie':
        this.router.navigate(['/', path]);
        break;
      case 'Global Coverage':
        this.router.navigate([`/global-coverage/${path}`]);
        break;
    }
  }
}
