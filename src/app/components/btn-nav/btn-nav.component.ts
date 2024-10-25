import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-btn-nav',
  standalone: true,
  imports: [],
  templateUrl: './btn-nav.component.html',
  styleUrl: './btn-nav.component.scss'
})
export class BtnNavComponent {
@Input() name:string='';
  constructor(private router:Router){

  }


  navigate(path:any){
    this.router.navigate(['/'],path);
  }
}
