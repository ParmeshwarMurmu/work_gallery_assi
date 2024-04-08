import { MORE_PROJECT } from "./action";




const initialState = {
    moreProjects: []

}

export const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case MORE_PROJECT:
            return {
                ...state,
                moreProjects: payload
            }


        default:
            return {
                ...state
            }
    }

}