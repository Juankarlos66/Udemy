import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pie-detail',
  templateUrl: './pie-detail.component.html',
  styleUrls: ['./pie-detail.component.scss'],
})
export class PieDetailComponent implements OnInit {
  name: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el parámetro 'name' de la URL
    this.name = this.route.snapshot.paramMap.get('name');
  }
}