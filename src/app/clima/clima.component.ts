import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  clima:any;
  ciudad = 'ciudad juarez';
  cargado = false;


  constructor(
    private climaService: ClimaService
  ) { }

  ngOnInit(): void {
    this.climaService.getclima(this.ciudad).subscribe((respuesta)=>{
      this.cargado = true;
      this.clima = respuesta;


    })


  }

}
