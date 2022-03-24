/* eslint-disable prettier/prettier */

import { Usuario } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    user:  null;
}

type AuthAction = 
    | { type: 'signUp', payload: { token: string, user: Usuario } }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }


    export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

        switch (action.type) {
            case 'signUp':
                return {
                    ...state,
                    status: 'authenticated',
                    token: action.payload.token,
                    user: action.payload.user
                }
    
            case 'logout':
            case 'notAuthenticated':
                return {
                    ...state,
                    status: 'not-authenticated',
                    token: null,
                    user: null
                }
    
            default:
                return state;
        }
    
    
    }