const fs = require('fs');
const path = require('path');

const React = require('react');
const { renderToString } = require('react-dom/server');
const { Provider } = require('react-redux');
const { matchPath, StaticRouter } = require('react-router');

const { BUILD_DIR } = require('./paths');

const App = require('../../client/lib/App').default;

const createStore = require('../../client/lib/modules/store').default;

import Cookies from 'universal-cookie';
import reducers from "../../client/lib/reducers";
import { IntlProvider, addLocaleData }     from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_ar from 'react-intl/locale-data/ar';

import * as jsonEn from  '../../client/lib/translations/english-common'
import * as jsonAr from  '../../client/lib/translations/arabic-common'

const localStorage = new Cookies();

const messages = {
  'ar': jsonAr.HEADER_FOOTER,
  'en': jsonEn.HEADER_FOOTER
};

var pathname = "/"
var language = localStorage.get('language') ? localStorage.get('language') : 'en';

// changelanguage(language)
addLocaleData([...locale_en, ...locale_ar]);

const routes = [
  '/index.html', // service-worker
  '/',
  '/product/*',

  '/login',
  '/register',
  '/cart',
  '/forgotpassword',
  '/customer/profile',
  '/customer/address',
  '/customer/wishlist',
  '/customer/loyalty',
  '/customer/orders',
  '/checkout',
  '/payment',
  '/paymentconirmation',
  '/search',
];

function reactRenderer(req, res, next) {
  const match = routes.find(route =>
    matchPath(req.path, {
      path: route,
      exact: true,
    }),
  );

  // bail
  if (!match) {
    console.log("path not found");
    return next();
  }

  const initialState = {
    foo: 'foobar',
    name: 'Slim Shady',
  };

  const store = createStore(reducers);

  // service-worker
  const location = match === '/index.html' ? '/' : req.url;
  console.log("location=", location);

  const context = {};

  const myApp = renderToString(
    <IntlProvider locale={language} messages={messages[language]}>
      <Provider store={store}>
        <StaticRouter location={location} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </IntlProvider>,
  );

  const html = fs
    .readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8')
    .replace('__MY_APP__', myApp)
    .replace('__REDUX__', JSON.stringify(initialState));

  return res.send(html);
}

module.exports = reactRenderer;
