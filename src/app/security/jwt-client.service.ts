import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private url = 'http://localhost:8080/authenticate'
  private token: any
  constructor(private http : HttpClient) { }

  genereteToken(authRequest){
   return this.http.post(this.url, authRequest, {responseType : 'text' as 'json'});
  }

  public welcome(token){
    let tokenStri = 'Bearer '+token;
    const headers = new HttpHeaders().set('Authorization',tokenStri);
    return this.http.get('http://localhost:8080/welcome', {headers, responseType: 'text' as 'json'})
  }
}

