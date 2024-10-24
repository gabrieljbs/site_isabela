// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Função para ler os dados de uma coleção
  getCollectionData(collectionName: string): Observable<any[]> {
    return this.firestore.collection(collectionName).valueChanges();
  }
}
