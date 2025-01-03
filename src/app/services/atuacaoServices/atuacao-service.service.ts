import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AtuacaoService {
  private apiUrl =
    'https://backend-costa-rodrigues-ohn5bz24a-gabriels-projects-368d0f0a.vercel.app/api';
  constructor(private http: HttpClient) {}

  async list() {
    const res = await this.http.get(`${this.apiUrl}/atuacao`);
    return res;
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/atuacao/${id}`);
  }

  private idSource = new Subject<number>();
  id$ = this.idSource.asObservable();

  // Método para emitir o ID
  setId(id: number) {
    this.idSource.next(id);
  }
}
