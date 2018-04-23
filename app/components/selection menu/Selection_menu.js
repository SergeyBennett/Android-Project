import {getColor} from "../../util/helpers";
import React, { Component } from "react";
import {StatusBar, View, BackHandler} from "react-native";
import {styles} from "../../styles/styles";
import Toolbar from "../notes/Toolbar";
import OpenNotesButton from "../buttons/OpenNotesButton";
import OpenListsButton from "../buttons/OpenListsButton"
import AllNotes from "../notes/view_allNotes";
import MainContainer from "../../containers/MainContainer"
import Lists from "../../../src/Lists/Lists";

export default class Selection_menu extends Component {

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
    }


    render() {
        return (
            <MainContainer title = 'Selection menu'>
                <OpenNotesButton onBtnPress={this.openNotes.bind(this)}></OpenNotesButton>
                <OpenListsButton onBtnPress={this.openLists.bind(this)}></OpenListsButton>
            </MainContainer>
        )
    }

    openNotes() {
        this.props.navigator.push({component: AllNotes, type: 'viewNotes'})
    }

    openLists() {
        this.props.navigator.push({component: Lists, type: 'viewLists'})
    }

}