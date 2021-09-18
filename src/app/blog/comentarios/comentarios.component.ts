import { Component, OnInit } from '@angular/core';
import { comentarios } from 'src/app/Modelos/comentarios.models';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios = [];
  autor = [];




  constructor(
    private comentariosService: ComentariosService
  ) { }

  ngOnInit(): void {
    this.comentariosService.getallcomments().subscribe((comentarios:comentarios []) => {
      this.comentarios = comentarios
      ;
    
    })

  }

}
