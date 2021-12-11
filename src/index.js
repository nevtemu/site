import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/_rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Main from "./components/Main";
import Region from "./components/Region.jsx";
import './index.css';

const rootElement = document.getElementById("root");
const store = createStore(rootReducer, composeWithDevTools( ));
//Language
const browserLang = navigator.language || navigator.userLanguage;
store.dispatch({type: browserLang})
//Color theme
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if (userPrefersLight){store.dispatch({type: 'light-mode'})}
// let state = store.getState()

render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route index element={<Main />}/>
        <Route path="region/:regionID" element={<Region />}/>
      </Route>
      </Routes>
  </BrowserRouter>
  </Provider>,
  rootElement
);
