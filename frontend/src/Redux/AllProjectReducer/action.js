import axios from "axios"



export const ALL_PROJECT = "ALL_PROJECT"




export const allProjectAction = (payload) => {
    return { type: ALL_PROJECT, payload }

}




export const getAllProjects = () => (dispatch) => {
    // console.log("dispatcher");
    axios.get('http://localhost:8000/home')
    .then((res)=>{
        // console.log(res.data);
        dispatch(allProjectAction(res.data.all))

    })
    .catch((err)=>{
        console.log(err);
    })

}

