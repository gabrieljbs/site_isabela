import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

interface Food {
  value: string;
  viewValue: string;
}

interface Data {
  title: string;
  description: string;
  url: string;
}
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent {
  selectedTab = 0;
  selected = 'steak-0';
  selectedIndex: number = 0;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  data: Data[] = [
    {
      title: 'Quality and reputation',
      description: '',
      url: 'assets/img-1.jpg',
    },
    { title: 'Culture and values', description: '', url: 'assets/img-2.jpg' },
    {
      title: 'Growth and development',
      description: '',
      url: 'assets/img-2.jpg',
    },
    {
      title: 'Diversity, Equity & Inclusion',
      description: '',
      url: 'assets/img-3.jpg',
    },
    {
      title: 'Flexible and hybrid working',
      description: '',
      url: 'assets/img-4.jpg',
    },
    { title: 'Wellbeing', description: '', url: 'assets/img-5.jpg' },
    { title: 'Social impact', description: '', url: 'assets/img-6.jpg' },
    { title: 'Sustainability', description: '', url: 'assets/img-7.jpg' },
  ];

  description =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s';

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
