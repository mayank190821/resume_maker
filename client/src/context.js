import {createContext} from "react";

export const GlobalContext = createContext({
    openLogin: false,
    redirectPath: "/",
    setRedirectPath: () => {},
    setopenLogin: () => {},
    image: undefined,
    oldData: undefined,
    setOldData: () => {},
    setImage: () => {}
})