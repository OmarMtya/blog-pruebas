import { Autor } from "./autor.models";

export interface comentarios {
    id: number;
    contenido: string;
    fecha?: string;
    autor: Autor;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  
