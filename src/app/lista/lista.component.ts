import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  alunos: string[] = [];

  constructor(private alunoService: ServicesService) {
    this.alunos = this.alunoService.listarAlunos();
  }

}
