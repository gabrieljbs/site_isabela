import { Component } from '@angular/core';
import { FindAnAdvisionComponent } from '../../components/find-an-advision/find-an-advision.component';
import { TabsAtuacaoComponent } from '../../components/tabs-atuacao/tabs-atuacao.component';

@Component({
  selector: 'app-atuacao',
  standalone: true,
  imports: [FindAnAdvisionComponent, TabsAtuacaoComponent],
  templateUrl: './atuacao.component.html',
  styleUrl: './atuacao.component.scss',
})
export class AtuacaoComponent {
  textoCompleto = '';
  limite: number = 600;
  mostrarTextoCompleto = false;
  texto = `Espera-se que terapias inovadoras, como a terapia celular e gênica, além de medtechs, continuem a gerar notícias empolgantes neste campo. O capital de risco continua sendo fundamental para o desenvolvimento do setor, enquanto empreendimentos colaborativos e acordos de licenciamento entre pares estão surgindo como promissores caminhos de investimento. Enquanto isso, as dinâmicas de mercado permanecem voláteis, impulsionadas por mudanças nos fluxos de capital, geopolítica, pressões inflacionárias globais e incertezas econômicas. Questões setoriais, como a competição por talentos, a politização dos preços de medicamentos, judicialização da saúde, diversificação nos ensaios clínicos e a crescente pressão para demonstrar compromisso com as questões ESG, também tornam o horizonte difícil de enxergar com a clareza necessária. Ainda assim, a verdade é que os próximos anos se avizinham com grande potencial. Estamos observando um número crescente de transações, avanços em terapias inovadoras e tecnologias médicas, e um cenário estratégico digno de nota por suas colaborações B2B, acordos de licenciamento e desinvestimentos. Um foco aumentado em arranjos contratuais dentro das redes de abastecimento destaca ainda mais o ethos de resiliência da indústria. Navegar com sucesso por este terreno dinâmico exige manobras hábeis e experiência diante de desafios em constante evolução.`;
  textoResumido = '';
  areasDePraticaConteudo = [
    'Agronegócio',
    'Alimentos e Bebidas',
    'Descarbonização',
    'Bens de Consumo e Varejo',
    'Imobiliário',
    'Tecnologia',
  ];

  ngOnInit() {
    this.textoCompleto = this.texto;
    this.textoResumido = this.texto.substring(0, this.limite) + '...';
  }

  alternarTexto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
}
