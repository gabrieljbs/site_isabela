import { Injectable } from '@angular/core';

interface GlobalCoverage {
  name: string;
  path: string;
  continents: Continent[];
}

interface Continent {
  name: string;
  path: string;
  countries: Country[];
}

interface Country {
  name: string;
  path: string;
}


@Injectable({
  providedIn: 'root',
})
export class MockDataServiceService {
  constructor() {}

  public globalCoverage: GlobalCoverage = {
    name: 'Global Coverage',
    path: 'global-coverage',
    continents: [
      {
        name: 'América do Sul',
        path: 'america-do-sul',
        countries: [
          {
            name: 'Brasil',
            path: 'brasil',
          },
        ],
      },
      {
        name: 'América do Norte',
        path: 'america-do-norte',
        countries: [
          {
            name: 'EUA',
            path: 'eua',
          },
        ],
      },
    ],
  };


  getDataGlobalCoverage() {
    return this.globalCoverage;
  }


}
