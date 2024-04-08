import { ADDITIONAL_DETAILS, DESCRIPTION, TITLE } from "./action"


const initialState = {
    title: '',
    description: '',
    additionalDetails: '',
    image: ''

}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TITLE:
            return {
                ...state,
                title: payload
            }

        case DESCRIPTION:
            return {
                ...state,
                description: payload
            }

        case ADDITIONAL_DETAILS:
            return {
                ...state,
                additionalDetails: payload
            }

        default:
            return {
                ...state
            }
    }

}