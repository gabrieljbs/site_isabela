import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleSearchComponent } from './pages/people-search/people-search.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { GlobalCoverageComponent } from './pages/global-coverage/global-coverage.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContinentsDetailComponent } from './pages/continents-detail/continents-detail.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NewsroomComponent } from './pages/newsroom/newsroom.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'people-search', component: PeopleSearchComponent },
  { path: 'expertise', component: ExpertiseComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'global-coverage', component: GlobalCoverageComponent },
  { path: 'global-coverage/:', component: ContinentsDetailComponent },
  { path: 'people-search', component: PeopleSearchComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'newsroom', component: NewsroomComponent },
];
