import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './persona.entity';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  async create(@Body() persona: Persona) {
    return await this.personaService.create(persona);
  }

  @Get()
  async findAll() {
    return await this.personaService.findAll();
  }

  @Delete(':rut')
  async remove(@Param('rut') rut: string) {
    return await this.personaService.remove(rut);
  }
}