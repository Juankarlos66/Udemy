import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carrusel',
  templateUrl: './image-carrusel.component.html',
  styleUrls: ['./image-carrusel.component.scss'],
})
export class ImageCarruselComponent implements OnInit {

  banners: string[] = ["assets/imgs/img1.png","assets/imgs/img2.png"]; 

  // Opciones de configuración para las diapositivas
  slideOpts = {
    initialSlide: 1,   // La diapositiva que se mostrará primero
    speed: 500,        // Velocidad de transición (ajustada a 500 ms para hacerla más fluida)
    loop: true, 
    autoplay: {
      delay: 3000,     // Cambio automático cada 3 segundos
      disableOnInteraction: false,  // Continuar autoplay aunque el usuario interactúe
    }
  };

  constructor() { }

  ngOnInit() {}

}
