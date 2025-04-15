import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-formulario-component',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './formulario-component.component.html',
  styleUrl: './formulario-component.component.css'
})
export class FormularioComponentComponent {
  nome: string = '';
  listas: string[] = [];

  constructor(private alunoService: ServicesService) { }
  salvarAluno(){
    if (this.nome.trim()){
      this.alunoService.adicionarAluno(this.nome)
      this.listas = this.alunoService.listarAlunos();
      this.nome = ' ';
    } else {alert('Digite um nome.')}
  }

  atualizarLista() {
    this.listas = this.alunoService.listarAlunos();
  }
  
}
