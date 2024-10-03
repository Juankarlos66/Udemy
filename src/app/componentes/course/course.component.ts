import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  // Declara las propiedades de los cursos
  courses = [
    { title: 'Curso Python', price: 899, img: 'assets/cursos/python.png' },
    { title: 'Curso Microsoft Excel', price: 900, img: 'assets/cursos/microsoft.png' },
    { title: 'Curso Desarrollo Web', price: 600, img: 'assets/cursos/desarrolloweb.png' },
    { title: 'Curso JavaScript', price: 500, img: 'assets/cursos/javascript.png' }
  ];

  // Lista de categorías
  categories: string[] = ['Python', 'Microsoft Excel','Desarrollo Web','JavaScript','Dibujo'];

  // Categoría seleccionada actualmente
  currentCategory: string = 'Python';

  // Descripción destacada
  highlightedDescription: string = 'Amplía tus oportunidades profesionales con este curso';

  // Cursos filtrados
  filteredCourses = this.courses;

  // Método para filtrar los cursos por categoría
  filterCourses(category: string) {
    this.currentCategory = category;
    this.filteredCourses = this.courses.filter(course => course.title.includes(category));
  }
}