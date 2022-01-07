const initialState = {hint: "kyiv"};

export default function hintReducer (state = initialState, action) {
    switch (action.type) {
        case 'hintChange': {
            if(state.hint != action.payload){return {...state,hint: action.payload}}
        }
        default:
        return state
    }
}