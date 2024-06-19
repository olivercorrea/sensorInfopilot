import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/counters';

  constructor(private http: HttpClient) { }

  getCounters(): Observable<any> {

    return this.http.get(this.apiUrl);

  }

}
