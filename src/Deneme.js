import { createContext } from "react";

const DenemeContext = createContext();

export const DenemeProvider = ({children}) => {

    const isim = "ahmet";
    const fonksiyon1 = (isim)=>{
        
    };

    const fonksiyon12 = function(isim){

    }
    const value = {
        isim,
        fonksiyon1,
        fonksiyon12
    };
    return (<DenemeContext.Provider value={value}>{children}</DenemeContext.Provider>)
};

export default DenemeContext;