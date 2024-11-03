import { Component, Input } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { AtuacaoService } from '../../services/atuacaoServices/atuacao-service.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToggleComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeRoute: any = '';
  items: any = ['Pessoas', 'O escritório', 'Atuação', 'Insights', 'Carreira'];
  atuacaoConteudo: any = [];
  page: string = '';
  isActive: any = '';
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

  arrayAtuacao: any = [{ title: 'Atuação', conteudo: [] }];

  constructor(private router: Router, private atuacaoService: AtuacaoService) {}

  private modalService = inject(NgbModal);

  async ngOnInit() {
    this.isactiveRouter();
    this.activeRoute = this.router.url.split('/').pop() || '';
    this.isActive = this.activeRoute;

    await (
      await this.atuacaoService.list()
    ).subscribe((res) => {
      this.arrayAtuacao.conteudo = res as any;

      this.atuacaoConteudo = this.arrayAtuacao.conteudo;
    });
  }



  navigate(path: string, id: any) {
    this.router.navigate(['/', path], { state: { id: id } });
  }

  isactiveRouter() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.router.url.split('/').pop() || '';
        this.isActive = this.activeRoute;
      });
  }

  openModalXl(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: 'mysize' });
  }

  
}
