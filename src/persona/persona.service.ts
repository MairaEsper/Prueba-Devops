import { Injectable } from '@nestjs/common';

export interface Persona {
  nombre: string;
  rut: string;
  fechaNacimiento: string;
  ciudad: string; 
}

@Injectable()
export class PersonaService {
  private personas: Persona[] = []

  create(persona: Persona) {
    this.personas.push(persona);
  }

  findAll() {
    return this.personas;
  }

  remove(rut: string) {
    const indice = this.personas.findIndex(p => p.rut === rut);
    if (indice !== -1) {
      this.personas.splice(indice, 1);
    }
  }
}
