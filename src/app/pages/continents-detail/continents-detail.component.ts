import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continents-detail',
  standalone: true,
  imports: [],
  templateUrl: './continents-detail.component.html',
  styleUrl: './continents-detail.component.scss'
})
export class ContinentsDetailComponent {

  constructor(private route: Router){

  }

  navigate(){
    this.route.navigate(['/global-coverage'])
  }
}
