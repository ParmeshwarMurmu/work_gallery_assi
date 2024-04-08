import axios from "axios"



export const  TITLE= "TITLE"
export const DESCRIPTION = "DESCRIPTION"
export const ADDITIONAL_DETAILS = "ADDITIONAL_DETAILS"



export const titleAction  = (payload)=>{
    return {type: TITLE, payload}

}

export const additionalDetailsAction  = (payload)=>{
    return {type: ADDITIONAL_DETAILS, payload}

}


export const descriptionAction  = (payload)=>{
    return {type: DESCRIPTION, payload}

}


export const newProject  = ()=>(dispatch)=>{
   
//    axios.get(`${APP_URL}/post/suggestedArts`)
//         .then((res)=>{
            
//             console.log(res.data);
           
//         })
//         .catch((err)=>{
            
//             console.log(err);
//         })


}

