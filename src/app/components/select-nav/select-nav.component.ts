import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
   
    private router: Router
  ) {


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
