import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.page.html',
  styleUrls: ['./offre.page.scss'],
})
export class OffrePage implements OnInit {

  public items: Array<{presentation: string, 
                        activites: string, 
                        surleposte: string,
                        nomentreprise: string,
                        nomposte: string,
                        codepostal: number,
                        ville: string}> = [];
  constructor() { 
    this.items.push({
    presentation : "Veniam aute dolore quis irure. Consectetur consectetur aliquip do et ipsum mollit veniam cillum.Sunt voluptate officia minim ut dolor anim id. Laborum ad velit aute laborum reprehenderit cupidatat qui culpa consequat voluptate. Velit sit cillum cillum laborum quis ut reprehenderit quis aute amet nostrud eiusmod. Officia pariatur culpa sit tempor pariatur.",
    activites : "Culpa labore culpa in quis quis officia eu. Velit laborum nostrud ex nisi eu sit elit Lorem velit ad. In pariatur eiusmod dolore reprehenderit ex nostrud duis eiusmod. Reprehenderit non enim eu eu sunt sunt occaecat esse elit incididunt ipsum anim.",
    surleposte : "Mollit eu pariatur aliqua laboris sit. Adipisicing laboris labore officia aute ut pariatur commodo quis. Magna reprehenderit irure ut enim magna tempor deserunt. Mollit nisi cupidatat sint ex duis nulla eu. Ad qui velit aute fugiat exercitation ut labore culpa incididunt exercitation sunt incididunt deserunt ut.",
    nomentreprise:"VCI LUXE SARL",
    nomposte:"Responsable Marketing",
    codepostal:57050,
    ville:"Metz",
  
  
  
  })

  }

  ngOnInit() {
  }

}
