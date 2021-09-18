import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaComponent } from './clima.component';



@NgModule({
  declarations: [
    ClimaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClimaComponent
  ]
})
export class ClimaModule { }
