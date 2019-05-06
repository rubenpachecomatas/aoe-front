import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  getUrl(): Observable<any> {
    const url = 'http://localhost:3030/civs';
    return this.http.get(url);
  }
}
