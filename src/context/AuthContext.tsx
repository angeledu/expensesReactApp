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
        
        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
       /* const resp = await cafeApi.get('/auth');
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        
        await AsyncStorage.setItem('token', resp.data.token );
        dispatch({ 
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });*/
    }

    const signIn = async ( {email, password }: LoginData ) => {
        try{

            await auth().signInWithEmailAndPassword(email, password)
            .then( ({ user }) => {
                dispatch({ 
                    type: 'signUp',
                    payload: {
                        token: user.uid,
                        user: user
                    }
                });

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
            .then( ({ user }) => {
                dispatch({ 
                    type: 'signUp',
                    payload: {
                        token: user.uid,
                        user: user
                    }
                });
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