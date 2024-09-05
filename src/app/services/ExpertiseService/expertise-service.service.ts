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
        name: "Industry's standard dummy",
        path: 'advisory-and-regulatory',
        description:
          'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Printing and typesetting',
        path: 'capital-markets',
        description:
          'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Electronic typesetting essentially',
        path: 'corporate-and-mea',
        description:
          'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: "Industry's standard dummy",
        path: 'disputes',
        description:
          'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: "Printing and typesetting",
        path: 'finance',
        description:
          'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  };

  getData() {
    return this.expertise;
  }
}
