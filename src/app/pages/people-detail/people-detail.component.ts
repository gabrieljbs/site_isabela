import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataServices/data.service';
import { PessoalService } from '../../services/pessoalServices/pessoal-service.service';
@Component({
  selector: 'app-people-detail',
  standalone: true,
  imports: [],
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
})
export class PeopleDetailComponent {
  dados: any = {};
  espcialidades: any[] = [];
  aliancas: any[] = [];
  membro: any[] = [];
  areasDePraticaConteudo: [] = [];
  setoresConteudo: [] = [];
  id: number;
  resumo: any;
  constructor(private router: Router, private pessoalService: PessoalService) {
    const meuDado = this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.id = meuDado;
  }

  async ngOnInit() {
    (await this.pessoalService.getById(this.id)).subscribe((res: any) => {
      this.dados = res;
      console.log(this.dados);
      this.resumo = this.stringSplice(res.resumo);
      this.especialidade(res.especialidades);
      this.aliacaEassociacao(res.aliancasEAssociacoes);
    });
  }

  stringSplice(texto: string) {
    const indicePonto = texto.indexOf('.'); // encontra o índice do primeiro ponto
    if (indicePonto === -1) return [texto]; // se não houver ponto, retorna a string original em um array

    const antesDoPonto = texto.substring(0, indicePonto + 1); // inclui o ponto na primeira parte
    const depoisDoPonto = texto.substring(indicePonto + 1); // parte depois do ponto

    return [antesDoPonto, depoisDoPonto];
  }

  especialidade(texto: any) {
    const setores = texto.filter(
      (item: { nome: string }) => item.nome === 'Setores'
    );

    const areasDePratica = texto.filter(
      (item: { nome: string }) => item.nome === 'Áreas de Prática'
    );

    this.setoresConteudo =
      setores.length > 0
        ? setores[0].conteudo.split(',').map((item: string) => item.trim())
        : [];

    this.areasDePraticaConteudo =
      areasDePratica.length > 0
        ? areasDePratica[0].conteudo
            .split(', ')
            .map((item: string) => item.trim())
        : [];
  }

  
  aliacaEassociacao(texto: any) {
    const membro = texto.filter(
      (item: { nome: string }) => item.nome === 'Membro do(a)'
    );

    const areasDePratica = texto.filter(
      (item: { nome: string }) => item.nome === "Diretora Executiva"

    );

    this.aliancas =
    areasDePratica.length > 0
        ? areasDePratica[0].conteudo.split(',').map((item: string) => item.trim())
        : [];

    this.membro =
      membro.length > 0
        ? membro[0].conteudo.split(',').map((item: string) => item.trim())
        : [];

    console.log(this.membro);
  }
}
