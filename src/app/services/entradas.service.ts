import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(
    private http: HttpClient
  ) {

  }
  getallentradas() {
    //return this.http.get("http://192.168.0.106:1337/posts")
    return [
      {
        "id": 1,
        "titulo": "Cómo ser más saludable",
        "contenido": "En este post vamos a hablar de como ser ...",
        "fecha": "2021-09-18T18:00:00.000Z",
        "autor": {
          "id": 1,
          "username": "alonso",
          "email": "usuario1@correo.com",
          "provider": "local",
          "confirmed": true,
          "blocked": false,
          "role": 3,
          "created_at": "2021-09-18T23:14:03.530Z",
          "updated_at": "2021-09-18T23:14:03.537Z"
        },
        "created_at": "2021-09-18T23:23:17.173Z",
        "updated_at": "2021-09-18T23:25:59.106Z",
        "portada": {
          "id": 1,
          "name": "ganadores-concurso[1].jpg",
          "alternativeText": "",
          "caption": "",
          "width": 999,
          "height": 603,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_ganadores-concurso[1].jpg",
              "hash": "thumbnail_ganadores_concurso_1_1cbf9d3687",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "width": 245,
              "height": 148,
              "size": 10,
              "path": null,
              "url": "/uploads/thumbnail_ganadores_concurso_1_1cbf9d3687.jpg"
            },
            "medium": {
              "name": "medium_ganadores-concurso[1].jpg",
              "hash": "medium_ganadores_concurso_1_1cbf9d3687",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "width": 750,
              "height": 453,
              "size": 91.19,
              "path": null,
              "url": "/uploads/medium_ganadores_concurso_1_1cbf9d3687.jpg"
            },
            "small": {
              "name": "small_ganadores-concurso[1].jpg",
              "hash": "small_ganadores_concurso_1_1cbf9d3687",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 302,
              "size": 41.67,
              "path": null,
              "url": "/uploads/small_ganadores_concurso_1_1cbf9d3687.jpg"
            }
          },
          "hash": "ganadores_concurso_1_1cbf9d3687",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 156.74,
          "url": "/uploads/ganadores_concurso_1_1cbf9d3687.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "created_at": "2021-09-18T23:22:50.364Z",
          "updated_at": "2021-09-18T23:22:50.377Z"
        },
        "comentarios": [
          {
            "id": 1,
            "contenido": "Puto  ",
            "fecha": "2021-09-18T18:00:00.000Z",
            "autor": 2,
            "published_at": "2021-09-18T23:25:40.141Z",
            "created_at": "2021-09-18T23:25:39.347Z",
            "updated_at": "2021-09-18T23:25:40.155Z"
          }
        ]
      },
      {
        "id": 3,
        "titulo": "Holña",
        "contenido": "probando",
        "fecha": null,
        "autor": null,
        "created_at": "2021-09-18T18:24:08.292Z",
        "updated_at": "2021-09-18T20:09:28.574Z",
        "portada": null,
        "comentarios": []
      }
    ]
  }
}
