import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  //esto es para traer distintos datos
  estudios : any =[];
  //otro dato simple
  nombre : string ="";
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.estudios = data.estudios;
      this.nombre = data.nombre; 
    })
  }

}
