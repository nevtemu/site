const initialState = {theme: "dark", darkTheme: true };
const rootElement = document.getElementById("root");
rootElement.classList.add('dark');

export default function themeReducer (state = initialState, action) {
    switch (action.type) {
        case 'light-mode': {
            rootElement.classList.remove('dark');
            rootElement.classList.add('light');
            return {...state,theme: 'light', darkTheme: false}
        }
        case 'dark-mode': {
            rootElement.classList.remove('light');
            rootElement.classList.add('dark');
            return {...state,theme: 'dark', darkTheme: true}
        }
        default:
        return state
    }
}