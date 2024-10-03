import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  id=""

  product = [
    {
    idP: 1,
    nombreP: 'Producto 1',
    descripcionP: 'Descripcion del producto 1',
    precioP: 100,
    imagenP: 'https://via.placeholder.com/150',
    nombredepto: "",
   },
  {
    idproduct: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripcion del producto 2',
    precio: 200,
    imagen: 'https://via.placeholder.com/150',
    nombredepto: "",
   },
   {
    idproduct: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripcion del producto 3',
    precio: 300,
    imagen: 'https://via.placeholder.com/150',
    nombredepto: "",
   }
  ]
  constructor(private rutaactiva:ActivatedRoute) { }

  ngOnInit() {}

}
