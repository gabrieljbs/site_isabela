import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleSearchComponent } from './pages/people-search/people-search.component';
import { CareersComponent } from './pages/careers/careers.component';
import { OfficeComponent } from './pages/office/office.component';
import { PerformanceComponent } from './pages/performance/performance.component';
import { PeopleDetailComponent } from './pages/people-detail/people-detail.component';
import { LifeSciencesComponent } from './pages/life-sciences/life-sciences.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { AtuacaoComponent } from './pages/atuacao/atuacao.component';
import { PoliticaAnticorrupcaoComponent } from './pages/politica-anticorrupcao/politica-anticorrupcao.component';
import { AcessibilidadeComponent } from './pages/acessibilidade/acessibilidade.component';
import { PoliticaConfidencialidadeComponent } from './pages/politica-confidencialidade/politica-confidencialidade.component';
import { PoliticaEticaECondutaComponent } from './pages/politica-etica-econduta/politica-etica-econduta.component';
import { PoliticaPrivacidadeComponent } from './pages/politica-privacidade/politica-privacidade.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'people-search', component: PeopleSearchComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'people-detail', component: PeopleDetailComponent },
  { path: 'life-sciences', component: LifeSciencesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'atuacao', component: AtuacaoComponent },
  { path: 'politica-anticorrupcao', component: PoliticaAnticorrupcaoComponent },
  { path: 'acessibilidade', component: AcessibilidadeComponent },
  {
    path: 'politica-confidencialidade',
    component: PoliticaConfidencialidadeComponent,
  },
  {path:'politica-etica-e-conduta', component:PoliticaEticaECondutaComponent},
  {path:'politica-privacidade', component:PoliticaPrivacidadeComponent}
];
