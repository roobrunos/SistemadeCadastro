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

  editando: boolean = false;
  indexEditando: number | null = null;
  consultaResultado: string | null = null;

  constructor(private alunoService: ServicesService) {
    this.atualizarLista();
  }

  salvarAluno() {
    if (!this.nome.trim()) {
      alert('Digite um nome.');
      return;
    }

    if (this.editando && this.indexEditando !== null) {
      this.alunoService.editarAluno(this.indexEditando, this.nome);
      this.cancelarEdicao();
    } else {
      this.alunoService.adicionarAluno(this.nome);
    }

    this.nome = '';
    this.atualizarLista();
  }

  consultarAluno() {
    const resultado = this.alunoService.consultarAluno(this.nome);
    this.consultaResultado = resultado ?? 'Aluno não encontrado.';
  }

  editarAluno(index: number) {
    this.nome = this.listas[index];
    this.editando = true;
    this.indexEditando = index;
  }

  excluirAluno(index: number) {
    this.alunoService.excluirAluno(index);
    this.atualizarLista();
    this.cancelarEdicao();
  }

  cancelarEdicao() {
    this.editando = false;
    this.indexEditando = null;
    this.nome = '';
  }

  atualizarLista() {
    this.listas = this.alunoService.listarAlunos();
  }
}

