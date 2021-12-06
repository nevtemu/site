const initialState = {language: "EN"};

export default function langReducer (state = initialState, action) {
    switch (action.type) {
        case 'en-GB': case 'en-US': {
            return {...state,language: 'EN'}
        }
        case 'ru-RU': case 'ru': {
            return {...state,language: 'RU'}
        }
        case 'ua-UA': case 'uk': {
            return {...state,language: 'UA'}
        }
        case 'ar-AE': case 'ar': {
            return {...state,language: 'AR'}
        }
        default:
        return state
    }
}