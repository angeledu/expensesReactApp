/* eslint-disable prettier/prettier */

import { Usuariox } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user:  Usuariox | null;
}

type AuthAction = 
    | { type: 'signUp', payload: { token: string, user: Usuariox } }
    | { type: 'addError', payload: any }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }


    export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

        switch (action.type) {
            case 'addError':
                return {
                    ...state,
                    user: null,
                    status: 'not-authenticated',
                    token: null,
                    errorMessage: action.payload,
                }
        
            case 'removeError':
                return {
                    ...state,
                    errorMessage: '',
                };
            case 'signUp':
                return {
                    ...state,
                    status: 'authenticated',
                    token: action.payload.token,
                    user: action.payload.user,
                }
    
            case 'logout':
            case 'notAuthenticated':
                return {
                    ...state,
                    status: 'not-authenticated',
                    token: null,
                    user: null,
                }
    
            default:
                return state;
        }
    
    
    }