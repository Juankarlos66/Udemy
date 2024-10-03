import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss'],
})
export class TemasComponent  implements OnInit {

  categories = [
    {
      name: 'Development',
      topics: [
        { name: 'Python', learners: '36,354,994' },
        { name: 'Web Development', learners: '11,415,615' },
        { name: 'Machine Learning', learners: '7,070,015' }
      ]
    },
    {
      name: 'Business',
      topics: [
        { name: 'Financial Analysis', learners: '1,195,282' },
        { name: 'SQL', learners: '5,977,561' },
        { name: 'PMP', learners: '1,733,398' }
      ]
    },
    {
      name: 'IT and Software',
      topics: [
        { name: 'Amazon AWS', learners: '6,123,456' },
        { name: 'Ethical Hacking', learners: '10,931,066' },
        { name: 'Cyber Security', learners: '3,998,037' }
      ]
    },
    {
      name: 'Design',
      topics: [
        { name: 'Photoshop', learners: '10,909,736' },
        { name: 'Graphic Design', learners: '3,381,052' },
        { name: 'Drawing', learners: '2,410,849' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {}

}
