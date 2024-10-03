import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  implements OnInit {

  categories = [
    { name: 'Diseño', img: 'assets/categorias/diseno.png' },
    { name: 'Desarrollo', img: 'assets/categorias/desarrollo.png' },
    { name: 'Marketing', img: 'assets/categorias/marketing.png' },
    { name: 'Informática y software', img: 'assets/categorias/software.png' },
    { name: 'Desarrollo personal', img: 'assets/categorias/personal.png' },
    { name: 'Negocios', img: 'assets/categorias/negocios.png' },
    { name: 'Fotografía', img: 'assets/categorias/fotografia.png' },
    { name: 'Música', img: 'assets/categorias/musica.png' }
  ];

  constructor() { }

  ngOnInit() {}

}
