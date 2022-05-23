const initState = {
    themes: 'dark' || 'red' || 'some' || 'my',

};

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case "SET-COLOR": {
            return {...state, themes: action.color};
        }
        default:
            return state;
    }
};

export const changeThemeC = (color: string): ActionType => {
    return {type: "SET-COLOR", color}
}; // fix any

export type ActionType = {
    type: "SET-COLOR"
    color: string
}