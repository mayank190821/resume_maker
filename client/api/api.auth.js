const SignupAuth= async (data)=>{
    try {
        let response = await fetch(`/auth/signup`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return (await response)
          ? response.json()
          : { error: "check your internet" };
      } catch (err) {
        console.log(err);
      }
}

const LoginAuth = async(data)=>{
    try{
        let res = await fetch(`auth/login`,{
            method:"POST",
            headers:{
                Accepts:"application/json",
                "Content-type":"application/json"
            },
            body: JSON.stringify(data),
        });
        return(await res)?res.json():{error:"check your internet"};

    }
    catch(err){
        console.log(err);
    }
}
export {SignupAuth,LoginAuth}