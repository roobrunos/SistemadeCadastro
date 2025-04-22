import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private alunos: string[] = [];

  adicionarAluno(nome: string) {
    this.alunos.push(nome.trim());
  }

  listarAlunos(): string[] {
    return [...this.alunos]; // retorna uma cópia segura
  }

  consultarAluno(nome: string): string | null {
    const encontrado = this.alunos.find(aluno => aluno.toLowerCase() === nome.trim().toLowerCase());
    return encontrado ?? null;
  }

  editarAluno(index: number, novoNome: string) {
    if (this.alunos[index]) {
      this.alunos[index] = novoNome.trim();
    }
  }

  excluirAluno(index: number) {
    if (index >= 0 && index < this.alunos.length) {
      this.alunos.splice(index, 1);
    }
  }
}

