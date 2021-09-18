import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
       path: 'blog',
       loadChildren: ()=> import('./blog/blog.module').then((m)=> m.BlogModule),

   },
   {
       path:'',
       pathMatch:'full',
       redirectTo: '/blog'
   },
   {
       path: "**",
       redirectTo: '/blog'
   }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
