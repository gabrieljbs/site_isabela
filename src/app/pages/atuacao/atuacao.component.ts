import { Component } from '@angular/core';
import { FindAnAdvisionComponent } from '../../components/find-an-advision/find-an-advision.component';
import { TabsAtuacaoComponent } from '../../components/tabs-atuacao/tabs-atuacao.component';
import { SearchComponent } from '../../components/search/search.component';
import { SetoresComponent } from '../../components/setores/setores.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AtuacaoService } from '../../services/atuacaoServices/atuacao-service.service';

@Component({
  selector: 'app-atuacao',
  standalone: true,
  imports: [
    FindAnAdvisionComponent,
    TabsAtuacaoComponent,
    SearchComponent,
    SetoresComponent,
  ],
  templateUrl: './atuacao.component.html',
  styleUrl: './atuacao.component.scss',
})
export class AtuacaoComponent {
  textoCompleto = '';
  oportunidade: any;
  areasPraticas: any;
  limite: number = 600;
  mostrarTextoCompleto = false;
  texto = `Espera-se que terapias inovadoras, como a terapia celular e gênica, além de medtechs, continuem a gerar notícias empolgantes neste campo. O capital de risco continua sendo fundamental para o desenvolvimento do setor, enquanto empreendimentos colaborativos e acordos de licenciamento entre pares estão surgindo como promissores caminhos de investimento. Enquanto isso, as dinâmicas de mercado permanecem voláteis, impulsionadas por mudanças nos fluxos de capital, geopolítica, pressões inflacionárias globais e incertezas econômicas. Questões setoriais, como a competição por talentos, a politização dos preços de medicamentos, judicialização da saúde, diversificação nos ensaios clínicos e a crescente pressão para demonstrar compromisso com as questões ESG, também tornam o horizonte difícil de enxergar com a clareza necessária. Ainda assim, a verdade é que os próximos anos se avizinham com grande potencial. Estamos observando um número crescente de transações, avanços em terapias inovadoras e tecnologias médicas, e um cenário estratégico digno de nota por suas colaborações B2B, acordos de licenciamento e desinvestimentos. Um foco aumentado em arranjos contratuais dentro das redes de abastecimento destaca ainda mais o ethos de resiliência da indústria. Navegar com sucesso por este terreno dinâmico exige manobras hábeis e experiência diante de desafios em constante evolução.`;
  textoResumido = '';
  id: any;
  ids: number | undefined;
  dados: any = [];
  constructor(
    private router: Router,
    private atuacaoService: AtuacaoService,
    private route: ActivatedRoute
  ) {
    let id = this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.id = id;
    this.chamar(this.id);
  }

  async ngOnInit() {
    this.atuacaoService.id$.subscribe((id) => {
      this.id = id;
      if (this.id !== undefined) {
        this.chamar(this.id); // Chama a função com o novo ID
      }
    });
  }

  async chamar(id: number) {
    (await this.atuacaoService.getById(id)).subscribe((res: any) => {
      this.dados = res as any;
      this.oportunidade = this.dados.oportunidade;
      this.areasPraticas = this.dados.areasPraticas;
    });
    this.textoCompleto = this.texto;
    this.textoResumido = this.texto.substring(0, this.limite) + '...';
  }

  alternarTexto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
}
