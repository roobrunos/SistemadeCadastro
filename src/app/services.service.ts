import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private alunos: string[] = []

  adicionarAluno(nome: string) {
    this.alunos.push(nome);
  }

  listarAlunos(): string[] {
    return this.alunos;
  }

  constructor() { }
}
