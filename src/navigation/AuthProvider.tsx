/* eslint-disable prettier/prettier */
// import React, { createContext, useState } from 'react';
// import auth from '@react-native-firebase/auth';

// interface AuthContextProps {

// }


// export const AuthContext = createContext( {} as AuthContextProps );

// export const AuthProvider = ({ children }: any) => {
//     const [user, setUser] = useState(null);

//     const login = async (email, password) => {
//         try{
//             await auth().signInWithEmailAndPassword(email, password);
//         } catch(e){
//             console.log(e);
//         }
//     }

//     const register = async (email, password) => {
//         try{
//             await auth().signInWithEmailAndPassword(email, password);
//         }catch (e){
//             console.log(e);
//         }
//     }

//     const logout =async () => {
//         try{
//             await auth().signOut();
//         }catch(e){
//             console.log(e);
//         }
//     }

//     return (
//         <AuthProvider.Provider
//             value={{
//                 user,
//                 setUser,
//                 login,
//                 register,
//                 logout
//             }}
//         >
//             { children }
//         </AuthProvider.Provider>
//     );
// }