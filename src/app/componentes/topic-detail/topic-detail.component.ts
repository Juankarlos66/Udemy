import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss'],
})
export class TopicDetailComponent  implements OnInit {
  topicName: string | null = '';
  topicLearners: string | null = '';
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el parámetro 'name' de la ruta
    this.topicName = this.route.snapshot.paramMap.get('name');
    this.topicLearners = this.route.snapshot.paramMap.get('learnes');
  }
}