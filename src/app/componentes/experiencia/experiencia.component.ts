import { Component, OnInit } from '@angular/core';
import { DatosPorfService } from 'src/app/servicios/datos-porf.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
educacionList:any;
  constructor(private datosPorfolio:DatosPorfService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.educacionList=data.school;
    })};


}
