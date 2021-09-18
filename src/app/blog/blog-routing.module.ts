import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { EntradasComponent } from './entradas/entradas.component';
import { PortadaComponent } from './portada/portada.component';

const routes: Routes = [
    {
        path:'',
        component: BlogComponent,
        children: [
            {
                path: 'portada',
                component: PortadaComponent
            },
            {
                path: 'entradas',
                component: EntradasComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}
