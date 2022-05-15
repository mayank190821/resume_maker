import { Navigate, Route } from "react-router-dom";

function Auth({children, setOpen}){
    const auth = sessionStorage.getItem("t");
    !auth && setOpen(true)
    return auth ? children:<Navigate to="/"/>
}
function privateRouter({setOpen, element, ...rest}){
    <Route {...rest} element={<Auth setOpen={setOpen}/>}/>
}

export default privateRouter;