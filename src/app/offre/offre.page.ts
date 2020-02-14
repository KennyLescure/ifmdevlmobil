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
    presentation : "Ea ad ex cupidatat voluptate. Veniam aute dolore quis irure non ea consectetur veniam consectetur exercitation. Cupidatat veniam ipsum voluptate voluptate non reprehenderit tempor minim aute sunt amet duis. Deserunt sit occaecat dolor nulla tempor esse enim minim. Consectetur consectetur aliquip do et ipsum mollit veniam cillum.Sunt voluptate officia minim ut dolor anim id. Laborum ad velit aute laborum reprehenderit cupidatat qui culpa consequat voluptate. Velit sit cillum cillum laborum quis ut reprehenderit quis aute amet nostrud eiusmod. Officia pariatur culpa sit tempor pariatur.",
    activites : "Culpa labore culpa in quis quis officia eu. Velit laborum nostrud ex nisi eu sit elit Lorem velit ad. In pariatur eiusmod dolore reprehenderit ex nostrud duis eiusmod. Reprehenderit non enim eu eu sunt sunt occaecat esse elit incididunt ipsum anim.",
    surleposte : "Mollit eu pariatur aliqua laboris sit. Cupidatat voluptate dolore in ullamco aliquip laborum ullamco nulla. Quis amet laboris dolore pariatur dolor sint mollit ea incididunt sit proident duis. Adipisicing laboris labore officia aute ut pariatur commodo quis. Magna reprehenderit irure ut enim magna tempor deserunt. Mollit nisi cupidatat sint ex duis nulla eu. Ad qui velit aute fugiat exercitation ut labore culpa incididunt exercitation sunt incididunt deserunt ut.",
    })

  }

  ngOnInit() {
  }

}
