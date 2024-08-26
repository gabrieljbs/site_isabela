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

interface Industrie {
  name: string;
  path: string;
  industrie: Industries[];
}

interface Industries {
  name: string;
  path: string;
}

interface Expertise {
  name: string;
  path: string;
  expertise: Expertises[];
}

interface Expertises {
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

  public industries: Industrie = {
    name: 'Industrie',
    path: 'industrie',
    industrie: [
      {
        name: 'Energy',
        path: 'energy',
      },
      {
        name: 'Financial institutions',
        path: 'financial-institutions',
      },
    ],
  };

  public expertise: Expertise = {
    name: 'Expertise',
    path: 'expertise',
    expertise: [
      {
        name: 'Corporate and M&A',
        path: 'corporate-and-mea',
      },
      {
        name: 'Disputes',
        path: 'disputes',
      },
    ],
  };

  getDataGlobalCoverage() {
    return this.globalCoverage;
  }
  getDataIndustrie() {
    return this.industries;
  }
  getDataExpertise() {
    return this.expertise;
  }

}
