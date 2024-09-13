import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleSearchComponent } from './pages/people-search/people-search.component';
import { ExpertiseDetailComponent } from './pages/expertise-detail/expertise-detail.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { GlobalCoverageComponent } from './pages/global-coverage/global-coverage.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContinentsDetailComponent } from './pages/continents-detail/continents-detail.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NewsroomComponent } from './pages/newsroom/newsroom.component';
import { IndustriesDetailComponent } from './pages/industries-detail/industries-detail.component';
import { OfficeComponent } from './pages/office/office.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'people-search', component: PeopleSearchComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'industries/:id', component: IndustriesDetailComponent },
  { path: 'expertise', component: ExpertiseComponent },
  { path: 'expertise/:id', component: ExpertiseDetailComponent },
  { path: 'global-coverage', component: GlobalCoverageComponent },
  { path: 'global-coverage/:id', component: ContinentsDetailComponent },
  { path: 'office', component: OfficeComponent },
];
