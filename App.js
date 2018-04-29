// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'
import {
    AppRegistry
} from 'react-native'

import NavigationExperimental from 'react-native-deprecated-custom-components';
import { StackNavigator } from 'react-navigation';

import AllNotes from './src/components/notes/view_allNotes'


import ApplicationStore from './src/reducers'
const reducer = storage.reducer(ApplicationStore);

import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import Selection_menu from "./src/components/selection menu/Selection_menu";
import view_allNotes from "./src/components/notes/view_allNotes"
import Lists from "./src/Lists/Lists"

const engine = createEngine('notes-app-store')

const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)

const routes = [
    { component: Selection_menu }
]

const navigation = StackNavigator({
    SelectionMenu: { screen: Selection_menu },
    ViewAllNotes: { screen: view_allNotes },
    Lists: {screen: Lists}
});

export default class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationExperimental.Navigator
                    style={{flex: 1}}
                    ref='nav'
                    initialRouteStack={routes}
                    renderScene={this.renderScene}
                />
            </Provider>
        )
    }renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProps}/>
    }
}

AppRegistry.registerComponent('App', () => App)

