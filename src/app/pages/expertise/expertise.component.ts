import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpertiseServiceService } from '../../services/ExpertiseService/expertise-service.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
})
export class ExpertiseComponent {
  items: any;

  constructor(
    private router: Router,
    private expertiseService: ExpertiseServiceService
  ) {
    this.items = this.expertiseService.getData()

    console.log(this.items.expertise)
  }


  navigate(path:any){
  }
  
  teste(name:any){
    console.log(name)

  }
}
