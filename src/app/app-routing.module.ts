import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TopicDetailComponent } from './componentes/topic-detail/topic-detail.component';
import { PieDetailComponent } from './componentes/pie-detail/pie-detail.component';
import { CategoriasDetailComponent } from './componentes/categorias-detail/categorias-detail.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'centro-comercial',
    loadChildren: () => import('./centro-comercial/centro-comercial.module').then( m => m.CentroComercialPageModule)
  },
  {
    path: 'topic/:name', // Ruta TOPIC-DETAIL
    component: TopicDetailComponent,
  },
  {
    path: 'pie-detail/:name', // Ruta PIE-DETAIL
    component: PieDetailComponent
  },
  {
    path: 'categorias-detail/:name', // Ruta CATEGORIA-DETAIL
    component: CategoriasDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
