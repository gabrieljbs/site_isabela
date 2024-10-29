import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PessoalService {
  private jsonURL = 'assets/dados.json'; 
  private apiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  async list(){
    const res = await this.http.get(`${this.apiUrl}/pessoal`);
    return res
  }

 getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pessoal/${id}`);
  }

}
