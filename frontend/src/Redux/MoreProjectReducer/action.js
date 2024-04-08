import axios from "axios"
import { APP_URL } from "../../Constants/constants"



export const MORE_PROJECT = "MORE_PROJECT"




export const moreProjectAction = (payload) => {
    return { type: MORE_PROJECT, payload }

}




export const getMoreProjects = () => (dispatch) => {
    // console.log("moreProject");
    axios.get(`${APP_URL}/home/moreProjects`)
    .then((res)=>{
        console.log(res.data);
        dispatch(moreProjectAction(res.data.moreProjects))

    })
    .catch((err)=>{
        console.log(err);
    })

}

