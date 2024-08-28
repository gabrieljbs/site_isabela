import { Injectable } from '@angular/core';

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
  providedIn: 'root'
})
export class ExpertiseServiceService {

  constructor() { }

  public expertise: Expertise = {
    name: 'Expertise',
    path: 'expertise',
    expertise: [
      {
        name: 'Advisory and regulatory',
        path: 'advisory-and-regulatory',
      },
      {
        name: 'Capital markets',
        path: 'capital-markets',
      },
      {
        name: 'Corporate and M&A',
        path: 'corporate-and-mea',
      },
      {
        name: 'Disputes',
        path: 'disputes',
      },
      {
        name: 'Finance',
        path: 'finance',
      },
      {
        name: 'Legal innovation',
        path: 'legal-innovationputes',
      },
    ],
  };

 





  getData(){
    return this.expertise;
  }
}
