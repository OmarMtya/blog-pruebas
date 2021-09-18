export interface Autor {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: number;
    created_at: string;
    updated_at: string;
  }