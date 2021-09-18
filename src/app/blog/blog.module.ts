import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { PortadaComponent } from './portada/portada.component';
import { EntradasComponent } from './entradas/entradas.component';
import { ComentariosModule } from './comentarios/comentarios.module';



@NgModule({
  declarations: [
    BlogComponent,
    PortadaComponent,
    EntradasComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ComentariosModule
  ]
})
export class BlogModule { }
