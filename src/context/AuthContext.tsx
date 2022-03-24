/* eslint-disable prettier/prettier */
 import React, { createContext, useReducer } from 'react';
 import auth from '@react-native-firebase/auth';
import { LoginData, RegisterData, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

 type AuthContextProps = {
    user: Usuario | null;
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

    const signIn = async ( {email, password }: LoginData ) => {
        try{
            await auth().signInWithEmailAndPassword(email, password);

        } catch(e){
            console.log(e);
        }
    };

    const signInGoogle = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
      
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            
            await  auth().signInWithCredential(googleCredential);
      
           // navigator.navigate('HomeScreen');
            
        } catch (error) {
          console.log(error)
        }
      };

    const signUp = async ( { email, password, nombre }: RegisterData ) => {
        try{
             auth().createUserWithEmailAndPassword(email, password)
             .then( async({ user }) => {

                await user.updateProfile({ displayName: nombre });
/*
                dispatch(
                    signUp( user.uid, user.displayName )
                );*/
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