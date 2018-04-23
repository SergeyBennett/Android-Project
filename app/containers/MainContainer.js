import {Component} from "react";
import React from "react";
import {View, BackHandler} from "react-native";
import {getColor} from "../util/helpers";
import {styles} from "../styles/styles";
import Toolbar from "../components/notes/Toolbar";

const ownTitle = 'Title';

export default class MainContainer extends Component {
    render() {
        return (
            <View style = {styles.main_positioning}>
                <Toolbar title={this.props.title} color={getColor('paperBlue')}/>
                <View style={styles.main_container}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}