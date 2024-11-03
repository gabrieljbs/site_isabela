import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AtuacaoService {

/*   private apiUrl = 'https://backend-costa-rodrigues-e3j0p51x8-gabriels-projects-368d0f0a.vercel.app/api' */
  private apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {
  }

  async list(){
    const res = await this.http.get(`${this.apiUrl}/atuacao`);
    return res
  }

 getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/atuacao/${id}`);
  }

}
