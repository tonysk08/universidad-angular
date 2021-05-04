import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deshabilitar = false
  mensaje:string = 'No se ha agregado ninguna persona'
  titulo='test Value'

  agregarPersona(){
    this.mensaje='Persona Agregada'
  }
}
