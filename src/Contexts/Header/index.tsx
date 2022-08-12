import { createContext, ReactNode, useState } from "react";
import { HeaderType } from "../../Types/HeaderType";

export const HeaderContext = createContext({} as HeaderType);

export const HeaderProvider = ( { children } : { children : ReactNode } ) => {

    

    const [openMenuPc, setOpenMenuPc] = useState(false);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    const wrapperMenuPc = () => setOpenMenuPc(!openMenuPc);
    const wrapperMenuMobile = () => setOpenMenuMobile(!openMenuMobile);
    
    return (
        <HeaderContext.Provider value={{
            openMenuPc,
            openMenuMobile,
            wrapperMenuPc,
            wrapperMenuMobile
        }}>{children}</HeaderContext.Provider>
    )
}