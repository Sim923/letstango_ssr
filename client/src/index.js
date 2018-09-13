/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import promise from "redux-promise";
// import thunk from 'redux-thunk';

import reducers     from "./reducers";

// import Routes from './routes'
import App from './App';


import {IntlProvider}     from "react-intl";
import { addLocaleData }  from "react-intl";

import locale_en from 'react-intl/locale-data/en';
import locale_ar from 'react-intl/locale-data/ar';

import * as jsonEn from  './translations/english-common'
import * as jsonAr from  './translations/arabic-common'

import createStore from './modules/store';

import Cookies from 'universal-cookie';

import { BrowserRouter, Route, Switch } from "react-router-dom";

const localStorage = new Cookies();

const messages = {
    'ar': jsonAr.HEADER_FOOTER,
    'en': jsonEn.HEADER_FOOTER
};

const locationPath = location.pathname

var pathname = "/"
var language = localStorage.get('language') ? localStorage.get('language') : 'en';


// if(locationPath.startsWith("/ae-ar")){
//    language = "ar"
//    pathname = "/ae-ar/"
// }

changelanguage(language)
addLocaleData([...locale_en, ...locale_ar]);

// const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={createStore(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
