import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs-atuacao',
  standalone: true,
  imports: [NgbNavModule, TabsAtuacaoComponent],
  templateUrl: './tabs-atuacao.component.html',
  styleUrl: './tabs-atuacao.component.scss',
})
export class TabsAtuacaoComponent {
  oportunidades: any[] = [
    'China',
    'Capital de risco essencial para financiamento do setor',
    'Transações de pequeno/médio porte (invés de mega transações)',
    'Desinvestimentos de ativos que não compõem o core-business',
    'Parcerias B2B estratégicas',
    'Convergência regulatória',
    'Terapias inovadoras, como a celular e gênica',
    'IA Generativa',
    'Medtechs',
    'Mercado de Carbono',
  ];
  mostrarConteudo = false;

  alternarConteudo() {
    this.mostrarConteudo = !this.mostrarConteudo;
  }
}
