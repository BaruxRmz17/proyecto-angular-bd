import { Component } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-pelicuas',
  imports: [],
  templateUrl: './pelicuas.component.html',
  styleUrl: './pelicuas.component.css'
})
export class PelicuasComponent {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor(){
    this.titulo = "Componente de Peliculas";
    this.peliculas = [
      new Pelicula(
        "Avengers Endgame",
        "https://i.pinimg.com/736x/67/91/b3/6791b331f134fa878b6c66e9b9d833c2.jpg",
        "Los Vengadores restantes intentan revertir el daño causado por Thanos."
      ),
      new Pelicula(
        "Spiderman No Way Home",
        "https://i.redd.it/0z22ocvl3dy71.jpg",
        "Peter Parker enfrenta el caos del multiverso después de que su identidad es revelada."
      ),
      new Pelicula(
        "S.W.A.T.",
        "https://i.pinimg.com/736x/13/9d/f7/139df72fa73d840a20320ec26e46ca4f.jpg",
        "Un equipo de fuerzas especiales de la policía de Los Ángeles combate el crimen."
      )
    ];
  }

}
