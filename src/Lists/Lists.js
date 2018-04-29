import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from "./List/List";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
import {actionCreators} from '../../app/actions/list'
import MainContainer from "../containers/MainContainer";


class Lists extends React.Component {

    constructor(props){
        super(props);
    }

    // state = {
    //     lists: [
    //         {id:1, title: "To Do", items: [
    //             {id: 1, title: "Android project", priority: 1, done: false},
    //             {id: 2, title: "Course work", priority: 1, done: true},
    //             {id: 3, title: "Intelligent systems", priority: 2, done: true},
    //             {id: 6, title: "Parallel programming", priority: 1, done: false},
    //             {id: 4, title: "E-publishing", priority: 3, done: false},
    //             {id: 5, title: "Have a rest",priority:4, done: false},
    //                 {id: 10, title: "Intelligent systems", priority: 2, done: true},
    //                 {id: 7, title: "Parallel programming", priority: 1, done: false},
    //                 {id: 8, title: "E-publishing", priority: 3, done: false},
    //                 {id: 9, title: "Have a rest",priority:4, done: false},
    //         ]},
    //         {id:2, title: "Shopping", items: []},
    //     ],
    //     currentListId: 1
    // }

    addItemToList = (item) => {
        this.props.addItem(item);
    }

    updateItemInList = (item) => {
        this.props.updateItem(item);
    }


    removeItemFromListHandler = (itemId) => {

        this.props.removeItem(itemId);
    }


    onSwipeLeft = () => {
        this.props.selectNextList();
    }

    onSwipeRight = () => {
        this.props.selectPrevList();
    }

    render() {
        const list = this.props.list;

        return (
            <MainContainer title = 'Lists'>
            <View style={styles.container}>
                <GestureRecognizer style={styles.titleContainer}
                                   onSwipeLeft={this.onSwipeLeft}
                                   onSwipeRight={this.onSwipeRight}>
                    <Text style={styles.title}>{list.title}</Text>
                </GestureRecognizer>
                <List
                      content={list.items}
                      addItem={(item) => this.addItemToList(item)}
                      updateItem={(item) => this.updateItemInList(item)}
                      removeItem={(itemId) => this.removeItemFromListHandler(itemId)} />
            </View>
            </MainContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    titleContainer:{
        padding: 12,
        alignItems: 'center',
        backgroundColor: 'rgba(244, 244, 244,0.5)',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray'
    }
});

const mapStateToProps = (state) => {
    return {
        list: state.lists.lists.find(list => list.id === state.lists.currentListId),
        lists: state.lists.lists
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(actionCreators.add(item)),
        updateItem: (item) => dispatch(actionCreators.update(item)),
        removeItem: (id) => dispatch(actionCreators.remove(id)),
        selectNextList: () => dispatch(actionCreators.selectNextList()),
        selectPrevList: () => dispatch(actionCreators.selectPrevList())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Lists);