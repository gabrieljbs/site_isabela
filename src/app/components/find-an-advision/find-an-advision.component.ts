import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-find-an-advision',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatInputModule,FormsModule],
  templateUrl: './find-an-advision.component.html',
  styleUrl: './find-an-advision.component.scss'
})
export class FindAnAdvisionComponent {

}
