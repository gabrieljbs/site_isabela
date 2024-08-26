import { Component } from '@angular/core';
import { FindAnAdvisionComponent } from '../../components/find-an-advision/find-an-advision.component';
import { MockDataServiceService } from '../../services/MockDataService/mock-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-coverage',
  standalone: true,
  imports: [FindAnAdvisionComponent],
  templateUrl: './global-coverage.component.html',
  styleUrl: './global-coverage.component.scss',
})
export class GlobalCoverageComponent {
  data: any;
  continents:any;
  constructor(
    private dataService: MockDataServiceService,
    private router: Router
  ) 
  {
  
    this.data = this.dataService.getDataGlobalCoverage();
    this.continents = this.data.continents
  }


  navigate(path:string){
    this.router.navigate([`/global-coverage/${path}`]);
  }
}
