const initialState = {theme: "dark", darkTheme: true };

export default function themeReducer (state = initialState, action) {
    switch (action.type) {
        case 'light-mode': {
            return {...state,theme: 'light', darkTheme: false}
        }
        case 'dark-mode': {
            return {...state,theme: 'dark', darkTheme: true}
        }
        default:
        return state
    }
}