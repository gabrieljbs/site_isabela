import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-people-search',
  standalone: true,
  imports: [
    MatTabsModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatPaginatorModule,
  ],
  templateUrl: './people-search.component.html',
  styleUrl: './people-search.component.scss',
  providers: [NgbCarouselConfig],
})
export class PeopleSearchComponent {
  showPageSizeOptions: boolean = false;
  pageSizeOptions = [5, 10, 25];
  toppings = new FormControl('');
  placeholder = 'Procure pelo nome, expertise or indústria';
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  value = '';
  people: any = [
    {
      src: 'assets/mask.png',
      name: 'Edna Mode',
      position: 'Sócia Diretora',
      email:'ednamode@cosro.com',
      phone:'+55 11 0000.0000',
      office:'Belfast',
    }
  ];
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
