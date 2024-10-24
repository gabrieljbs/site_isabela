import { Injectable } from '@angular/core';

interface Industrie {
  name: string;
  path: string;
  industrie: Industries[];
}

interface Industries {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class IndustriesServiceService {

  constructor() { }

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
      {
        name: 'Life sciences and healthcare',
        path: 'life-sciences-and-healthcare',
      },
      {
        name: 'Private capital',
        path: 'private-capital',
      },
       {
        name: 'Technology',
        path: 'technology',
      },
      {
        name: 'Mining and metals',
        path: 'mining-and-metals',
      },
      {
        name: 'Infrastructure and transport',
        path: 'infrastructure-and-transport',
      },
       {
        name: 'Industrials and manufacturing',
        path: 'industrials-and-manufacturing',
      },
      {
        name: 'Communications, media and entertainment',
        path: 'communications-media-and-entertainment',
      },
    ],
  };
  
  getData(){
    return this.industries;
  }
}
