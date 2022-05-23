const addResumeData = async (reqData) => {
    return await fetch("/user/edit_data", {
        method:"PUT",
        headers:{
            Accept:"application/json",
        },
        body:reqData
      }).then(async (data) => {
          return await data.json();
      }).catch(() => {
          return {error: "unable to add data!"}
      })
}

export {addResumeData}