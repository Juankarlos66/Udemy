import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../componentes/header/header.component';
import { BannerComponent } from '../componentes/banner/banner.component';
import { ImageCarruselComponent } from '../componentes/image-carrusel/image-carrusel.component';
import { SponsorsComponent } from '../componentes/sponsors/sponsors.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseComponent } from '../componentes/course/course.component';
import { CategoriasComponent } from '../componentes/categorias/categorias.component';
import { TemasComponent } from '../componentes/temas/temas.component';
import { PieComponent } from '../componentes/pie/pie.component';
import { TopicDetailComponent } from '../componentes/topic-detail/topic-detail.component';
import { PieDetailComponent } from '../componentes/pie-detail/pie-detail.component';
import { CategoriasDetailComponent } from '../componentes/categorias-detail/categorias-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, BannerComponent, SponsorsComponent,
    ImageCarruselComponent, CourseComponent,CategoriasComponent,TemasComponent,PieComponent, TopicDetailComponent,
     PieDetailComponent, CategoriasDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
