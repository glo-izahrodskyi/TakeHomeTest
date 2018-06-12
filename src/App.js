// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store/Store';

import Root from './RootComponent/Component';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Root />
                </PersistGate>
            </Provider>
        );
    }
}
