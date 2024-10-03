import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
})
export class DepartamentosComponent  implements OnInit {

  deptos = [
  {
    iddeptos: "depto1",
    nombre: "Electronica",
    imgdeptos: "../assets/electronica/television2.png",
  },
  {
    iddeptos: "depto2",
    nombre: "Jugueteria",
    imgdeptos: "",
  },
  {
    iddeptos: "depto3",
    nombre: "Mascotas",
    imgdeptos: "",
  },
  {
    iddeptos: "depto4",
    nombre: "Higiene",
    imgdeptos: "",
  },
];
  constructor() { }

  ngOnInit() {}

}
