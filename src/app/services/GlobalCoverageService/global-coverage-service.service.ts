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
export class GlobalCoverageServiceService {
  constructor() {}

  public globalCoverage: GlobalCoverage = {
    name: 'Global Coverage',
    path: 'global-coverage',
    continents: [
      {
        name: 'North America',
        path: 'north-america',
        countries: [
          {
            name: 'EUA',
            path: 'eua',
          },
        ],
      },
      {
        name: 'Latin America and the Caribbean',
        path: 'latin-america-and-the-caribbean',
        countries: [
          {
            name: 'Brasil',
            path: 'brasil',
          },
        ],
      },
      {
        name: 'Europe',
        path: 'europe',
        countries: [
          {
            name: 'France',
            path: 'france',
          },
        ],
      },
      {
        name: 'Middle East',
        path: 'middle-east',
        countries: [
          {
            name: 'Saudi Arabia',
            path: 'saudi-rabia',
          },
        ],
      },
      {
        name: 'Africa',
        path: 'africa',
        countries: [
          {
            name: 'South Africa',
            path: 'south-africa',
          },
        ],
      },
      {
        name: 'Asia Pacific',
        path: 'asia-pacific',
        countries: [
          {
            name: 'Brasil',
            path: 'brasil',
          },
        ],
      },
    ],
  };


  getData() {
    return this.globalCoverage;
  }
}
