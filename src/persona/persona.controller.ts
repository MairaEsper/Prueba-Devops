import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaService, type Persona } from './persona.service';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  create(@Body() persona: Persona) {
    return this.personaService.create(persona);
  }

  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Delete(':rut')
  remove(@Param('rut') rut: string) {
    return this.personaService.remove(rut);
  }
}
