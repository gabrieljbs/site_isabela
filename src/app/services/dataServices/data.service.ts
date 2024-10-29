import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonURL = 'assets/dados.json'; 
  private apiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  async getData(name:string){
    const res = await this.http.get(`${this.apiUrl}/${name}`);
    return res
  }

}
