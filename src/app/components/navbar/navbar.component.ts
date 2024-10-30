import { Component, Input } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

import { inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ ToggleComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: any = ['Pessoas', 'O escritório', 'Atuação', 'Insights', 'Carreira'];
  data: any = [];
  page: string = '';
  isActive:any = '';
  arrayPessoas = [
    {
      title: 'Pessoas',
      opcao: [
        {
          label: 'Sócios',
          text: 'Perfis com foto, biografia completa, informações de contato e setores e áreas de atuação.',
          path: 'people-search',
        },
        {
          label: 'Counsel',
          text: 'Perfis com breve biografia e informações de contato.',
          path: 'people-search',
        },
        {
          label: 'Associados',
          text: 'Perfis simplificados com informações básicas e contatos.',
          path: 'people-search',
        },
      ],
    },
  ];

  arrayOffice = [
    {
      title: 'O escritório',
      opcao: [
        {
          label: 'Quem somos',
        },
        {
          label: 'Uma abordagem colaborativa',
        },
        {
          label: 'Um time sem fronteiras',
        },
        {
          label: 'Ai-powered',
        },
        {
          label: 'Diversidade, equidade e inclusão para além da retórica',
        },
        {
          label: 'Sustentabilidade na prática',
        },
        {
          label: 'Compromisso com a responsabilidade social e pro bono',
        },
        {
          label: 'Empoderamento e desenvolvimento profissional',
        },
      ],
    },
  ];

  arrayAtuacao = [
    {
      title: 'Atuação',
      opcao: [
        {
          label: 'Agronegócio',
        },
        {
          label: 'Alimentos e Bebidas',
        },
        {
          label: 'Bens de Consumo e Varejo',
        },
        {
          label: 'Cannabis',
        },
        {
          label: 'Descarbonização',
        },
      ],
      opcao2: [
        {
          label: 'Energia',
        },
        {
          label: 'Esportes',
        },
        {
          label: 'Imobiliário',
        },
        {
          label: 'Infraestrutura',
        },
        {
          label: 'Life Sciences e Healthcare',
        },
      ],
      opcao3: [
        {
          label: 'Mineração',
        },
        {
          label: 'Navegação',
        },
        {
          label: 'Tecnologia',
        },
      ],
    },
  ];

  activeRoute: any = 'people-search';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  private modalService = inject(NgbModal);

  openModalXl(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: 'mysize' });
  }

  ngOnInit() {
    this.isactiveRouter();
    this.activeRoute = this.router.url.split('/').pop() || ''; // Define a rota ativa inicialmente
    this.isActive = this.activeRoute; // Inicializa a isActive
  }

  navigate(path: string) {
    this.router.navigate(['/', path]);
    this.modalService.dismissAll();
  }

  isactiveRouter() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.router.url.split('/').pop() || '';
        this.isActive = this.activeRoute; // Atualiza isActive na mudança de rota
        console.log(this.isActive);
      });
  }
}
