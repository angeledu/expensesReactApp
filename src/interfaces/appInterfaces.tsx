/* eslint-disable prettier/prettier */
export interface LoginData {
    email:   string;
    password: string;
}

export interface RegisterData {
    email:   string;
    password: string;
    nombre:   string;
}

export interface Usuario {
    rol:    string;
    estado: boolean;
    google: boolean;
    nombre: string;
    correo: string;
    uid:    string;
    img?:   string;
}
