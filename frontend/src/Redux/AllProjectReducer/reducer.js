import {  ALL_PROJECT,  } from "./action"


const initialState = {
    data: []

}

export const reducer = (state = initialState, { type, payload }) => {
    // console.log("pay", payload);
    switch (type) {
        case ALL_PROJECT:
            return {
                ...state,
                data: payload
            }


        default:
            return {
                ...state
            }
    }

}