import { Test, TestingModule } from '@nestjs/testing';
import { PersonaController } from './persona.controller';
import { PersonaService, Persona } from './persona.service';

describe('PersonaController', () => {
  let controller: PersonaController;
  let service: PersonaService;

  const mockPersonaService = {
    create: jest.fn(),
    findAll: jest.fn().mockReturnValue([
      {
        nombre: 'Juana',
      rut: '12.345.678-9',
      fechaNacimiento: '10-10-1995',
      ciudad: 'Coquimbo'
      }
    ]),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaController],
      providers: [
        {
          provide: PersonaService,
          useValue: mockPersonaService,
        },
      ],
    }).compile();

    controller = module.get<PersonaController>(PersonaController);
    service = module.get<PersonaService>(PersonaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería llamar a service.create con los datos correctos', () => {
    const dto: Persona = {
      nombre: 'Juana',
      rut: '12.345.678-9',
      fechaNacimiento: '10-10-1995',
      ciudad: 'Coquimbo'
    };

    controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
    expect(service.create).toHaveBeenCalledTimes(1);
  });

  it('debería retornar un arreglo de personas al llamar findAll', () => {
    const resultado = controller.findAll();
    
    expect(resultado).toHaveLength(1);
    expect(resultado[0].ciudad).toBe('Coquimbo');
    expect(service.findAll).toHaveBeenCalledTimes(1);
  });

  it('debería llamar a service.remove con el rut correcto', () => {
    const rut = '12.345.678-9';
    
    controller.remove(rut);
    expect(service.remove).toHaveBeenCalledWith(rut);
    expect(service.remove).toHaveBeenCalledTimes(1);
  });
});