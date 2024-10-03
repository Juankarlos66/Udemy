import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent  implements OnInit {

  sponsors: string[] = [
    'assets/imgs/volkswagen.png','assets/imgs/samsung.png','assets/imgs/cisco.png','assets/imgs/vimeo.png',
    'assets/imgs/pg.png','assets/imgs/hpe.png','assets/imgs/citi.png','assets/imgs/ericsson.png'];

  constructor() { }

  ngOnInit() {}

}
