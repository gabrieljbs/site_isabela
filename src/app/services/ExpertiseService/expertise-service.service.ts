import { Injectable } from '@angular/core';

interface Expertise {
  name: string;
  path: string;
  expertise: Expertises[];
}

interface Expertises {
  name: string;
  path: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExpertiseServiceService {
  constructor() {}

  public expertise: Expertise = {
    name: 'Expertise',
    path: 'expertise',
    expertise: [
      {
        name: 'Advisory and regulatory',
        path: 'advisory-and-regulatory',
        description:
          'Our public company, corporate governance, employment, and regulatory attorneys act as trusted advisors to our clients on their most sensitive issues.',
      },
      {
        name: 'Capital markets',
        path: 'capital-markets',
        description:
          'We set precedents in the capital markets advising on all debt and equity products, from investment-grade and high-yield debt offerings to IPOs. ',
      },
      {
        name: 'Corporate and M&A',
        path: 'corporate-and-mea',
        description:
          'We provide market-leading companies, investment funds and financial institutions with top-tier corporate and M&A advice in every jurisidiction',
      },
      {
        name: 'Disputes',
        path: 'disputes',
        description:
          'Our lawyers have vast experience litigating, arbitrating, investigating and resolving disputes across the world. We are ready to help, whatever the crisis. ',
      },
      {
        name: 'Finance',
        path: 'finance',
        description:
          'Our finance team is renowned as one of the strongest and deepest around, with more than 1,000 attorneys located in all the major financial centers. ',
      },
      {
        name: 'Legal innovation',
        path: 'legal-innovationputes',
        description:
          'We are a pioneer in our industry, committed to continual advancement and finding innovative ways to exceed our clients expectations.',
      },
    ],
  };

  getData() {
    return this.expertise;
  }
}
