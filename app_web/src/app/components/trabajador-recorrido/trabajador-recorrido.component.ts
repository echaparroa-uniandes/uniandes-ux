import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador, TrabajadorService } from '../../services/trabajador.service';

@Component({
  selector: 'app-trabajador-recorrido',
  templateUrl: './trabajador-recorrido.component.html',
  styleUrl: './trabajador-recorrido.component.scss'
})

export class TrabajadorRecorridoComponent  implements OnInit {
  trabajador: Trabajador | undefined;

  constructor(
    private route: ActivatedRoute,
    private trabajadorService: TrabajadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trabajadorService.obtenerTrabajadorPorId(id).subscribe(trabajador => this.trabajador = trabajador);
  }

}
