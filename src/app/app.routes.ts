import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleSearchComponent } from './pages/people-search/people-search.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NewsroomComponent } from './pages/newsroom/newsroom.component';
import { OfficeComponent } from './pages/office/office.component';
import { PerformanceComponent } from './pages/performance/performance.component';
import { PeopleDetailComponent } from './pages/people-detail/people-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'people-search', component: PeopleSearchComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'performance', component: PerformanceComponent },
  {path:'people-detail',component:PeopleDetailComponent}
];
