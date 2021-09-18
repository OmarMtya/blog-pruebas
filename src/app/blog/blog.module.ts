import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { PortadaComponent } from './portada/portada.component';
import { EntradasComponent } from './entradas/entradas.component';



@NgModule({
  declarations: [
    BlogComponent,
    PortadaComponent,
    EntradasComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
