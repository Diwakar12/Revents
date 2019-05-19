import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';

const store = configureStore();

const rootEl=document.getElementById('root');

let render = () => {
    ReactDOM.render(
      <Provider store={store}>
       <ScrollToTop>
          <App />
        </ScrollToTop>
      </Provider>,
      rootEl
    );
  };

if(module.hot){
    module.hot.accept('./app/layout/App', () =>{
        setTimeout(render)
    }

    )  
}

render();
serviceWorker.unregister();
