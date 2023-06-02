import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Provider store={store}>
    <App/>
</Provider>
);

// provider ile sarmaladık ya ve içerisine parametre olaral store verdik. Bu sayede tüm sayfar tarafından erişilebilir hale geldi. Provider ın kullanım amacı budur.