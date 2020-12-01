import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
    <StateProvider initialState={initialState}
    reducer={reducer}>
    <App />
    </StateProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
// serviceWorker.unregister();
// reportWebVitals();