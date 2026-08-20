import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const onSent=async (prompt) =>{
        await runChat(prompt)
    }

    onSent("what is react js")

    // whatever variables in the contextValue can be used anywere in the project
    const contextValue={
        
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
} 

export default ContextProvider