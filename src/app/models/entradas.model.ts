import { Portada } from './portada.model';
import { Comentario } from './comentario.model';
import { Autor } from './autor.model';

export interface Entradas {
  id: number;
  titulo: string;
  contenido: string;
  fecha: string;
  autor: Autor;
  created_at: Date;
  updated_at: Date;
  portada: Portada;
  comentarios: Comentario[];
}

