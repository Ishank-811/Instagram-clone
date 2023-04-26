import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore , applyMiddleware , compose} from "redux" ;  
import reducers from "./redux/reducers/index"
import {Provider} from "react-redux" ;
import thunk from "redux-thunk" ;
const enhancers = [applyMiddleware(thunk)];
const store = createStore(reducers , compose(...enhancers)) ; 

ReactDOM.render(
  
<Provider store={store}>
<App /> 
</Provider> , 
  document.getElementById('root')
);
