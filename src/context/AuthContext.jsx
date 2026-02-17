import { createContext, useContext } from "react";
import { api } from "../utils/api";

const  AuthContext = createContext(null)


export const AuthProvider = ({children }) =>{
    const signup = async function(data) {
        try{
            const response = await api.post('/auth/signup' , data)
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
        const login = async function(data) {
        try{
            const response = await api.post('/auth/login' , data)
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
    return(      
        <AuthContext.Provider value={{signup , login}}>
             {children}
        </AuthContext.Provider>
    )
}




export const useAuth = () => { return useContext(AuthContext)}




