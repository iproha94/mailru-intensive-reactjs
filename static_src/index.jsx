import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import initStore from './utils/store';

ReactDOM.render(
    <Provider store={initStore()}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
