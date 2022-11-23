import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>(this.url + '/users');
  }

  getUser(id: string) {
    return this.http.get<any[]>(this.url + '/users/' + id);
  }
}
