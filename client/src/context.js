import {createContext} from "react";

export const OpenLoginContext = createContext({
    openLogin: false,
    redirectPath: "/",
    setRedirectPath: () => {},
    setopenLogin: () => {}
})