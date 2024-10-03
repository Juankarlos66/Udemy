import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent  implements OnInit {

  footerSections = [
    {
      title: '',
      links: [
        { name: 'Udemy Business', url: '#' },
        { name: 'Enseña en Udemy', url: '#' },
        { name: 'Consigue la aplicación', url: '#' },
        { name: '¿Quiénes somos?', url: '#' },
        { name: 'Ponte en contacto con nosotros', url: '#' }
      ]
    },
    {
      title: '',
      links: [
        { name: 'Empleo', url: '#' },
        { name: 'Blog', url: '#' },
        { name: 'Ayuda y asistencia', url: '#' },
        { name: 'Afiliado', url: '#' },
        { name: 'Inversores', url: '#' }
      ]
    },
    {
      title: '',
      links: [
        { name: 'Condiciones', url: '#' },
        { name: 'Política de privacidad', url: '#' },
        { name: 'Configuración de cookies', url: '#' },
        { name: 'Mapa del sitio', url: '#' },
        { name: 'Declaración de accesibilidad', url: '#' }
      ]
    }
  ];

  // Imagen del logo
  footerLogo = {
    src: 'assets/logo.png',
    alt: 'Udemy Logo'
  };

  // Idioma
  language = 'Español';

  constructor() { }

  ngOnInit() {}

}
