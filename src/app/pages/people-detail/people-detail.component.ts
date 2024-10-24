import { Component } from '@angular/core';
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
  pessoa: any[] = [];
  dados: any[] = [];
  constructor(private router: Router, private dadosService: DataService) {
    const meuDado = this.router.getCurrentNavigation()?.extras.state?.['id'];
    console.log(meuDado);

    this.dadosService.carregarDados().subscribe(
      (dados) => {
        this.dados = dados;
          
           this.pessoa = this.dados.filter(dado => dado.id === meuDado); 

        console.log(this.dados);
      },
      (error) => {
        console.error('Erro ao carregar os dados', error);
      }
    );
  }
}
