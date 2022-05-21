const SignupAuth = async (data)=>{
    return await fetch('/auth/signup',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
        },
        body:JSON.stringify(data)
    }).then((res)=>{
        return res.status
    }).catch((err)=>{
        return err;
    })
}

const LoginAuth=async (data)=>{
    return await fetch("/auth/login",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    }).then(async (res)=>{
        return await res.json();
    }).catch((err)=>{
        return err;
    })
}

export {SignupAuth,LoginAuth};