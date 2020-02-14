import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.page.html',
  styleUrls: ['./offre.page.scss'],
})
export class OffrePage implements OnInit {

  public items: Array<{presentation: string, activites: string, surleposte: string}> = [];
  constructor() { 
    this.items.push({
    presentation : "presentation ",
    activites : "activite",
    surleposte : "surleposte",
    })

  }

  ngOnInit() {
  }

}
