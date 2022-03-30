/* eslint-disable prettier/prettier */
 import React, { createContext, useEffect, useReducer } from 'react';
 import auth from '@react-native-firebase/auth';
import { LoginData, RegisterData, Usuariox } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

 type AuthContextProps = {
    user: Usuariox | null;
    token: string | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ( registerData: RegisterData ) => void;
    signIn: ( loginData: LoginData ) => void;
    signInGoogle: () => void;
    logOut: () => void;

 }

 const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
    
    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        const usuario = await AsyncStorage.getItem('usuario');
        
        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
        dispatch({ 
            type: 'signUp',
            payload: {
                token: token,
                user: JSON.parse(usuario!)
            }
        });
    }

    const signIn = async ( {email, password }: LoginData ) => {
        try{

            await auth().signInWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                dispatch({ 
                    type: 'signUp',
                    payload: {
                        token: user.uid,
                        user: user
                    }
                });

                await AsyncStorage.setItem('token',user.uid );
                await AsyncStorage.setItem('usuario', JSON.stringify(user));
            })

        } catch(e){
            console.log(e);
        }
    };

    const signInGoogle = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await  auth().signInWithCredential(googleCredential)
            .then( async ({ user }) => {
                dispatch({ 
                    type: 'signUp',
                    payload: {
                        token: user.uid,
                        user: user
                    }
                });
                
                await AsyncStorage.setItem('token',user.uid );
                await AsyncStorage.setItem('usuario', JSON.stringify(user));
            });

        } catch (error) {
          console.log(error)
        }
      };

    const signUp = async ( { email, password, nombre }: RegisterData ) => {
        try{
             auth().createUserWithEmailAndPassword(email, password)
             .then( async({ user }) => {

                await user.updateProfile({ displayName: nombre });

                dispatch({ 
                    type: 'signUp',
                    payload: {
                        token: user.uid,
                        user: user
                    }
                });

            })
        }catch (e){
            console.log(e);
        }
    };

    const logOut = async () => {
        try{
            await auth().signOut();
            dispatch({ type: 'logout' });
        }catch(e){
            console.log(e);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signInGoogle,
                signUp,
                logOut
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}