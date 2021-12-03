const initialState = {layout: "map"};

export default function layoutReducer (state = initialState, action) {
    switch (action.type) {
        case 'list': case 'table': case 'slider': case 'map': case 'cards': {
            return {
              ...state,
              layout: action.type
            }
          }

        default:
        return state
    }
}