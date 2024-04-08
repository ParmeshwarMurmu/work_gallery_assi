import axios from "axios"
import { APP_URL } from "../../Constants/constants"



export const ALL_PROJECT = "ALL_PROJECT"




export const allProjectAction = (payload) => {
    return { type: ALL_PROJECT, payload }

}




export const getAllProjects = () => (dispatch) => {
    // console.log("dispatcher");
    axios.get(`${APP_URL}/home`)
    .then((res)=>{
        // console.log(res.data);
        dispatch(allProjectAction(res.data.all))

    })
    .catch((err)=>{
        console.log(err);
    })

}

