import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre:string = 'Juan';
  apellido:String = 'Perez'
  edad:number = 20;

}
