import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { ActivatedRoute } from '@angular/router';
import { InformacionUsuarioConsulta } from '../../interfaces/consulta.interface';

@Component({
  selector: 'consultas-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent implements OnInit {
  public id_consulta!: number;
  public informacionUsuarioConsulta!: InformacionUsuarioConsulta;
  public id_usuario!: string;

  constructor(
    private consultasService: ConsultasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_consulta = this.activatedRoute.snapshot.params['id'];

    this.consultasService
      .getInformacionUsuarioConsulta(this.id_consulta!)
      .subscribe((response) => {
        this.informacionUsuarioConsulta = response;
        this.id_usuario = response.id_usuario.toString();
      });
  }
}
