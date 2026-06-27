import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('personas') 
export class Persona {
  @PrimaryColumn() 
  rut!: string;

  @Column()
  nombre!: string;

  @Column()
  fechaNacimiento!: string;

  @Column()
  ciudad!: string;
}