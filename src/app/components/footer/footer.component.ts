import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AtuacaoService } from '../../services/atuacaoServices/atuacao-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  atuacaoConteudo: any = [];
  arrayAtuacao: any = [{ title: 'Atuação', conteudo: [] }];
  constructor(private router: Router,private atuacaoService: AtuacaoService) {

    
  }

  async ngOnInit(){
    await (
      await this.atuacaoService.list()
    ).subscribe((res) => {
      this.arrayAtuacao.conteudo = res as any;

      this.atuacaoConteudo = this.arrayAtuacao.conteudo;
    });
  }

  navigate(path: string, id: any) {
    this.router.navigate(['/', path], { state: { id: id } });
    this.atuacaoService.setId(id);
  }
}
