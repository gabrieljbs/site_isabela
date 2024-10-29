import { Component, Input } from '@angular/core';
import { BtnNavComponent } from '../btn-nav/btn-nav.component';
import { ToggleComponent } from '../toggle/toggle.component';

import { inject, TemplateRef } from '@angular/core';

import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnNavComponent, ToggleComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: any = ['Pessoas', 'O escritório', 'Atuação', 'Insights', 'Carreira'];
  data: any = [];
  page: string = '';
  isActive = true;
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
  currentUrl: any = '';
  constructor(private router: Router) {}
  private modalService = inject(NgbModal);

  openModalXl(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: 'mysize' });
  }

  navigate(path: string) {
    this.router.navigate(['/', path]);
    console.log(path);
    this.modalService.dismissAll();
  }

  ngOnInit(){
    
  }

  
  
}
