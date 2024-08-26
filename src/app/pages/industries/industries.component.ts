import { Component } from '@angular/core';
import { FindAnAdvisionComponent } from '../../components/find-an-advision/find-an-advision.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [FindAnAdvisionComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  items: any[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
