const SignupAuth = async (data)=>{
    await fetch('/signup',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
        },
        body:JSON.stringify(data)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>{
        return err;
    })
}

const LoginAuth=async (data)=>{
    await fetch("/login",{
        method:"GET",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        },
    }).then((res)=>{
        return res.json();
    }).catch((err)=>{
        return err;
    })
}

export default {SignupAuth,LoginAuth};