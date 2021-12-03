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
render(
  <Provider store={store}>
  {console.log(store.getState())}
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route index path="" element={<Main />}/>
        <Route path="region/:regionID" element={<Region />}/>
      </Route>
      </Routes>
  </BrowserRouter>
  </Provider>,
  rootElement
);
