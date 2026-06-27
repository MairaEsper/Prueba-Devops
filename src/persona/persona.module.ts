import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { Persona } from './persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])], 
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule {}