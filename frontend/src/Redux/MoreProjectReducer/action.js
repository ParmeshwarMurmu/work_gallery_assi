import axios from "axios"



export const MORE_PROJECT = "MORE_PROJECT"




export const moreProjectAction = (payload) => {
    return { type: MORE_PROJECT, payload }

}




export const getMoreProjects = () => (dispatch) => {
    // console.log("moreProject");
    axios.get('http://localhost:8000/home/moreProjects')
    .then((res)=>{
        console.log(res.data);
        dispatch(moreProjectAction(res.data.moreProjects))

    })
    .catch((err)=>{
        console.log(err);
    })

}

