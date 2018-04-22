import {getColor} from "../../util/helpers";
import React, { Component } from "react";
import {StatusBar, View, BackHandler} from "react-native";
import {styles} from "../../styles/styles";
import Toolbar from "../notes/Toolbar";
import OpenNotesButton from "../buttons/OpenNotesButton"
import AllNotes from "../notes/view_allNotes";
import * as Platform from "react-native";
import * as Platform from "react-native/Libraries/Utilities/Platform.android";


export default class Selection_menu extends Component {


    constructor(props) {
        super(props);
        this.backButtonListener = null;
        this.currentRouteName = 'Main';
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBackButton)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackButton)
    }

    _handleBackButton() {
        if (this.props.navigator.getCurrentRoutes().length == 1) {
            return false
        }
        return true
        if (Platform.OS === 'android') {
            this.backButtonListener = BackHandler.addEventListener('hardwareBackPress', () => {
                if (this.currentRouteName !== 'Main') {
                    return false;
                }

                return true;
            });
        }
    }


    render() {
        return (
            <View style={[ styles.selection_menu, {
                backgroundColor: 'white' } ]}
                  barStyle="light-content"
                  animated={true}>
                <StatusBar
                    backgroundColor={getColor('paperBlue700')}
                    barStyle="light-content"
                    animated={true}
                />
                <Toolbar title="Notes" color={getColor('paperBlue')}/>

                <OpenNotesButton onBtnPress={this.openNotes.bind(this)}></OpenNotesButton>
            </View>
        )
    }

    openNotes() {
        this.props.navigator.push({component: AllNotes, type: 'viewNotes'})
    }

    // openLists() {
    //     this.props.navigator.push({component: AllLists, type: 'viewLists'})
    // }

}