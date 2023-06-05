import { createContext, useEffect, useState } from "react";
  export const UserContext = createContext()

  
    export default function UserProvider({children}){
        const lsUser= JSON.parse(localStorage.getItem("Linkr"))
        const [token, setToken] = useState(()=> {return lsUser?.token ? lsUser.token : null})
        delete lsUser.token
        const [user, setUser] = useState(() => {return lsUser?.user ? lsUser.user : null})
         

        const lsToken= {

            headers: {
                Authorization: `Bearer ${token}` 
            }
        }

    return(
        <UserContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </UserContext.Provider>
    )
}   