import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-categorias-detail',
  templateUrl: './categorias-detail.component.html',
  styleUrls: ['./categorias-detail.component.scss'],
})
export class CategoriasDetailComponent  implements OnInit {
  categoryName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'name' de la ruta
    this.categoryName = this.route.snapshot.paramMap.get('name');
  }
}
