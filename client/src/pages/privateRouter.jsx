import { Navigate } from "react-router-dom";

function privateRouter({setOpen, element}){
    const auth = sessionStorage.getItem("t");
    !auth && setOpen(true)
    return auth ? element:<Navigate to={-1}/>
}

export default privateRouter;