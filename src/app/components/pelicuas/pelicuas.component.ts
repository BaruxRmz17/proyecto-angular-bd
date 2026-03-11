import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicuas',
  imports: [],
  templateUrl: './pelicuas.component.html',
  styleUrl: './pelicuas.component.css'
})
export class PelicuasComponent {
  public titulo: string;
  public peliculas: Array<any>;

  constructor(){
    this.titulo = "Componente de Peliculas";
    this.peliculas = [
      {
        title: "Avengers Endgame",
        image: "https://i.pinimg.com/736x/67/91/b3/6791b331f134fa878b6c66e9b9d833c2.jpg",
        description: "Los Vengadores restantes intentan revertir el daño causado por Thanos."
      },
      {
        title: "Spiderman No Way Home",
        image: "https://i.redd.it/0z22ocvl3dy71.jpg",
        description: "Peter Parker enfrenta el caos del multiverso después de que su identidad es revelada."
      },
      {
        title: "S.W.A.T.",
        image: "https://i.pinimg.com/736x/13/9d/f7/139df72fa73d840a20320ec26e46ca4f.jpg",
        description: "Un equipo de fuerzas especiales de la policía de Los Ángeles combate el crimen."
      }
    ];
  }

}
