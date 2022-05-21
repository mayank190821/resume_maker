import { Navigate } from "react-router-dom";

function privateRouter({setOpen, element, path, setRedirectPath}){
    const auth = sessionStorage.getItem("t");
    if(!auth) {
        setOpen(true); 
        setRedirectPath(`${path}`);
    }
    return auth ? element:<Navigate to={-1}/>
}

export default privateRouter;