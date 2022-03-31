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

export interface Usuariox {
    displayName:  any;
    email:        any;
    uid:          any;
    phoneNumber:  any;
    photoURL?:    any;
}
