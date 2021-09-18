import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient,
    ) {}
    getallcomments(){
      return this.http.get("http://192.168.0.106:1337/comentarios")
    }
}
