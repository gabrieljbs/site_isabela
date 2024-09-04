import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';
import { SelectNavComponent } from '../select-nav/select-nav.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule,SelectNavComponent,SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    // Animação growShrink
    trigger('growShrink', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ]
})
export class HeaderComponent {
  activeTabId: number | null = null;
  isActive: Boolean = false;
  activeTab: number | null = null;
  isExpanded = false;
  isCollapsed = false;
  navbar: any = [
    {
      name: 'Capabilite',
      path:"capabilite"
    },
    {
      name: 'Insights',
      path:"insights"
    },
    {
      name: 'About us',
      path:"about-us"
    },
  ];
active: any;

  constructor(
    private router: Router
  ) { 
  }

  onMouseEnter() {
    this.isExpanded = true;
  }

  onMouseLeave() {
    this.isExpanded = false;
    this.activeTabId = null;
  }

  openContent(index: number): void {

    console.log(index)
    this.isCollapsed = true;
    this.isActive = true;
    this.activeTabId = index;
  }


  closeContent() {
    this.isCollapsed = false;
    this.isActive = false;
  }

  navigate(path: any) {
    this.router.navigate(['/', path]);
  }
  
}
