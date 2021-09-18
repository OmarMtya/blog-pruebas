import { EntradasService } from './../../services/entradas.service';
import { Component, OnInit } from '@angular/core';
import { Entradas } from 'src/app/models/entradas.model';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  entradas = [];
  constructor(
    private EntradasService: EntradasService
  ) { }

  ngOnInit(): void {
    //this.EntradasService.getallentradas().toPromise().then((entradas: Entradas[]) => {
    //this.entradas = entradas;
    //})
    this.entradas = this.EntradasService.getallentradas()
  }


}
