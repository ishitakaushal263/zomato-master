import { SIGN_IN, SIGN_UP, SIGN_OUT } from './auth.type'

const initialState = {};


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.payload,

            }
        case SIGN_UP:
            return {
                ...state,
                ...action.payload,
            }
        case SIGN_OUT:
            return {}
        default:
            return {
                ...state
            }

    }
}

export default AuthReducer