export type ActionType = {
    type: "LOADING"
    isLoad: boolean
}

const initState = {
    isLoad: false
}


export const loadingReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoad: action.isLoad}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoad: boolean): ActionType => {
    return {type: "LOADING", isLoad}
} // fix any