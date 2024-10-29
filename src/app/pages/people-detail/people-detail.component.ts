import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataServices/data.service';
@Component({
  selector: 'app-people-detail',
  standalone: true,
  imports: [],
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
})
export class PeopleDetailComponent {
  dados: any[] = [];
  espcialidades:any[]=[];
  aliancas:any[]=[];
  isId: any;
  constructor(private router: Router, private dadosService: DataService) {
    const meuDado = this.router.getCurrentNavigation()?.extras.state?.['id'];

    this.isId = meuDado;
    console.log(this.isId);
  }

  async ngOnInit() {

    await (
      await this.dadosService.getData('pessoal')
    ).subscribe(
      (dados: any) => {
        this.dados = dados;
        this.dados = this.dados.filter((dado) => dado.id === this.isId);
      },
      (error: any) => {
        console.error('Erro ao carregar os dados', error);
      }
    );


    await (
      await this.dadosService.getData('especialidades')
    ).subscribe(
      (itens: any) => {
        this.espcialidades = itens;
        this.espcialidades = this.espcialidades.filter((dado) => dado.pessoal_id === this.isId);
      },
      (error: any) => {
        console.error('Erro ao carregar os dados', error);
      }
    );

    await (
      await this.dadosService.getData('especialidades')
    ).subscribe(
      (itens: any) => {
        this.aliancas = itens;
        this.aliancas = this.espcialidades.filter((dado) => dado.pessoal_id === this.isId);

        console.log(this.aliancas);
      },
      (error: any) => {
        console.error('Erro ao carregar os dados', error);
      }
    );
  }


}
