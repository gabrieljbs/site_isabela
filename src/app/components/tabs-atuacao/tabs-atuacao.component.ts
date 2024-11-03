import { Component, Input, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs-atuacao',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './tabs-atuacao.component.html',
  styleUrls: ['./tabs-atuacao.component.scss'], // Corrigido para "styleUrls"
})
export class TabsAtuacaoComponent implements OnInit {
  @Input() oportunidades: any;
  @Input() desafios: any;
  @Input() macroTendencias: any;
  @Input() experiencias: any;

  oportunidadesArray: string[] = [];
  desafiosArray: string[] = [];
  macroTendenciasArray: string[] = [];
  experienciasArray: any; // Definido como um array de objetos

  ngOnInit() {
    this.oportunidadesArray = this.convertStringToArray(this.oportunidades);
    this.desafiosArray = this.convertStringToArray(this.desafios);
    this.macroTendenciasArray = this.convertStringToArray(this.macroTendencias);

    this.experienciasArray = this.processExperiencias(this.experiencias); // Processa a entrada
   
  }

  private convertStringToArray(input: string): string[] {
    const jsonArrayString = input
      .replace(/^{/, '[')
      .replace(/}$/, ']')
      .replace(/"/g, '"')
      .replace(/,/g, ',');
    return JSON.parse(jsonArrayString);
  }
  private processExperiencias(input: string) {
    const formattedString = input.toString();

    const items = formattedString.split('",').map((item) => item.trim());

    const cleanedItems = items.map((item) =>
      item.replace(/{|}/g, '').replace(/\\/g, '').replace(/"/g, '').trim()
    );

    const experienciasArray = [];
    for (let i = 0; i < cleanedItems.length; i += 2) {
      if (cleanedItems[i + 1]) {
        const nome = cleanedItems[i].replace(/nome:/, '').trim();
        const conteudo = cleanedItems[i + 1].replace(/conteudo:/, '').trim();

        experienciasArray.push({
          nome: nome,
          conteudo: conteudo,
          mostrar: false,
        });
      }
    }

    return experienciasArray;
  }
  mostrarConteudo = false;

  alternarConteudo(index:number) {
    this.experienciasArray[index].mostrar = !this.experienciasArray[index].mostrar;
  }
}
