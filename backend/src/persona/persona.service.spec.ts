import { Test, TestingModule } from '@nestjs/testing';
import { PersonaService, Persona } from './persona.service';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaService],
    }).compile();

    service = module.get<PersonaService>(PersonaService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería crear una persona y guardarla en el arreglo', () => {
    const nuevaPersona: Persona = {
      nombre: 'Juana',
      rut: '12.345.678-9',
      fechaNacimiento: '10-10-1995',
      ciudad: 'Coquimbo'
    };

    service.create(nuevaPersona);
    const personas = service.findAll();

    expect(personas).toHaveLength(1);
    expect(personas[0]).toEqual(nuevaPersona);
  });

  it('debería retornar el arreglo vacío al inicio', () => {
    const personas = service.findAll();
    expect(personas).toEqual([]);
  });

  it('debería eliminar una persona por su rut', () => {
    const persona: Persona = {
      nombre: 'Juana',
      rut: '12.345.678-9',
      fechaNacimiento: '10-10-1995',
      ciudad: 'Coquimbo'
    };

    service.create(persona);
    expect(service.findAll()).toHaveLength(1);

    service.remove('12.345.678-9');
    expect(service.findAll()).toHaveLength(0);
  });

  it('no debería fallar si se intenta eliminar un rut que no existe', () => {
    const persona: Persona = {
      nombre: 'Juan',
      rut: '21.246.739-7',
      fechaNacimiento: '03-05-2001',
      ciudad: 'Santiago'
    };

    service.create(persona);
    service.remove('rut-inventado');
    
    expect(service.findAll()).toHaveLength(1);
  });
});