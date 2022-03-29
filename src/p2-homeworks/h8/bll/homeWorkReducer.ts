import {UserType} from "../HW8"

type SortUp = {
    type: "sort"
    payload: "up"
}
type SortDown = {
    type: "sort"
    payload: "down"
}
type Check = {
    type: "check"
    payload: number
}
export type ActionType = SortUp | SortDown | Check

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            // need to fix
            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}