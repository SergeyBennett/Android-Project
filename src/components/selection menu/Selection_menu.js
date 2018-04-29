import React, { Component } from "react";
import {BackHandler,StyleSheet} from "react-native";
import OpenNotesButton from "../buttons/OpenNotesButton";
import OpenListsButton from "../buttons/OpenListsButton"
import AllNotes from "../notes/All_Notes";
import MainContainer from "../../containers/MainContainer"
import Lists from "../../Lists/Lists";

export default class Selection_menu extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBackButton)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackButton)
    }

    _handleBackButton() {
        return this.props.navigator.getCurrentRoutes().length != 1;

    }


    render() {
        return (<MainContainer title='Selection menu' style={styles.container}>
                    <OpenNotesButton onBtnPress={this.openNotes.bind(this)}/>
                    <OpenListsButton onBtnPress={this.openLists.bind(this)}/>
                </MainContainer>);
    }

    openNotes() {
        this.props.navigator.push({component: AllNotes, type: 'viewNotes'})
    }

    openLists() {
        this.props.navigator.push({component: Lists, type: 'viewLists'})
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})