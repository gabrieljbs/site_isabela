import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo-left',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './logo-left.component.html',
  styleUrl: './logo-left.component.scss'
})
export class LogoLeftComponent {
  fontSize = 75; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

  
    if (scrollPosition > 0) {
      this.fontSize = Math.max(50, 75 - scrollPosition / 10); 
    } else {
      this.fontSize = 75; 
    }
  }
}
5