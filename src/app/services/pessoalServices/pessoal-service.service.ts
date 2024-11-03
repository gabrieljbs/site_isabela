import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PessoalService {
  private apiUrl =
    'https://backend-costa-rodrigues-ohn5bz24a-gabriels-projects-368d0f0a.vercel.app/api';

  constructor(private http: HttpClient) {}

  async list() {
    const res = await this.http.get(`${this.apiUrl}/pessoal`);
    return res;
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pessoal/${id}`);
  }
}
