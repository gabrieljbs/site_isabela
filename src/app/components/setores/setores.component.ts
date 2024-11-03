import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { PessoalService } from '../../services/pessoalServices/pessoal-service.service';
import { ReplacePipe } from '../../replace.pipe';

@Component({
  selector: 'app-setores',
  standalone: true,
  imports: [ReplacePipe],
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss'], // Correção aqui
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SetoresComponent {
  @Input() areasPraticas: any;
  setor = [
    'Agronegócio',
    'Alimentos e Bebidas',
    'Descarbonização',
    'Bens de Consumo e Varejo',
    'Imobiliário',
    'Tecnologia',
  ];
  areasDePraticaConteudo: any;
  pessoal: any[] = [];
  dados:any[]=[];
  constructor(private pessoalService: PessoalService) {}

  async ngOnInit() {
    this.areasDePraticaConteudo = this.processExperiencias(this.areasPraticas);

    await (
      await this.pessoalService.list()
    ).subscribe((res) => {
      this.pessoal = (res as any).map((item: any) => ({
        ...item,
        resumoMin: item.resumo
          ? item.resumo.length > 100
            ? item.resumo.substring(0, 100) + '...'
            : item.resumo
          : '',
      }));
    });

  }
  private processExperiencias(input: string) {
    const formattedString = input.toString();

    const items = formattedString.split('","').map((item) => item.trim());

    const cleanedItems: any = items.map((item) =>
      item.replace(/{|}/g, '').replace(/\\/g, "'").replace(/"/g, '').trim()
    );

    console.log(cleanedItems)
    return cleanedItems;
  }

  
  slideNext() {
    const swiperContainer = document.querySelector('.mySwiper') as any;
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.slideNext();
    }
  }

  slidePrev() {
    const swiperContainer = document.querySelector('.mySwiper') as any;
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.slidePrev();
    }
  }
}
