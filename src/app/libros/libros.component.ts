import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros = [
    {id: '1', titulo: 'Te veré bajo el hielo', autor: 'Robert Bryndza'},
    {id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro'},
    {
      id: '3',
      titulo: 'El día que se perdió la cordura',
      autor: 'Javier Castillo',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  showAuthor(_libro: any) {
    const verAutor = 'Escrito por: ' + _libro.autor;
    alert(verAutor)
    console.log(_libro.titulo, 'escrito por', _libro.autor)
  }
}
