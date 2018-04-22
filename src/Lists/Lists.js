import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from "./List/List";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Lists extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        lists: [
            {id:1, title: "To Do", items: [
                {id: 1, title: "Android project", priority: 1, done: false},
                {id: 2, title: "Course work", priority: 1, done: true},
                {id: 3, title: "Intelligent systems", priority: 2, done: true},
                {id: 6, title: "Parallel programming", priority: 1, done: false},
                {id: 4, title: "E-publishing", priority: 3, done: false},
                {id: 5, title: "Have a rest",priority:4, done: false},
            ]},
            {id:2, title: "Shopping", items: []},
        ],
        currentListId: 1
    }

    addItemToList = (listId, item) => {

        const listIndex = this.state.lists.findIndex((x => x.id === listId));
        let list = this.state.lists[listIndex];

        const items = [...list.items];
        items.unshift({...item});

        const lists = [...this.state.lists].sort(this.sorter);
        list = {...list};

        list.items = items;
        lists[listIndex] = list;

        this.setState({lists: lists});

    }

    updateItemInList = (listId, item) => {

        const listIndex = this.state.lists.findIndex((x => x.id === listId));
        let list = this.state.lists[listIndex];

        const itemIndex = list.items.findIndex(i => i.id === item.id);

        const items = [...list.items];
        items[itemIndex] = {...item};

        const lists = [...this.state.lists].sort(this.sorter);
        list = {...list};

        list.items = items;
        lists[listIndex] = list;

        this.setState({lists: lists});

    }


    removeItemFromListHandler = (listId, itemId) => {


        const listIndex = this.state.lists.findIndex((x => x.id === listId));
        let list = this.state.lists[listIndex];

        const itemIndex = list.items.findIndex(item => item.id === itemId);

        const items = [...list.items].sort( this.sorter );
        items.splice(itemIndex,1);

        const lists = [...this.state.lists].sort(this.sorter);
        list = {...list};

        list.items = items;
        lists[listIndex] = list;

        this.setState({lists: lists});
    }

    updateLists = () => {
        let lists = [];

        this.state.lists.forEach(list => {
            const items = [...list.items].sort( this.sorter );
            let l = {...list};
            l.items = items;
            lists.push(l);
        });

        this.setState({lists: lists});
    }


    sorter = (a,b) => {
        if(a.done && b.done){
            return 0;
        }
        else
            if(a.done)
                return 1;
        else
            if(b.done)
                return -1;
        else{
            if(a.priority > b.priority)
                return 1;

            if(a.priority < b.priority)
                return -1;

            }
        return 0;
    }

    onSwipeLeft = (s) => {
        let nextId = null;
        let currIndex = this.state.lists.findIndex( list => list.id === this.state.currentListId);

        if(currIndex === 0){
            nextId = this.state.lists[this.state.lists.length-1].id;
        }else{
            nextId = this.state.lists[currIndex-1].id;
        }

        this.setState({currentListId: nextId});
    }

    onSwipeRight = (s) => {
        let nextId = null;
        let currIndex = this.state.lists.findIndex( list => list.id === this.state.currentListId);

        if(currIndex === this.state.lists.length-1){
            nextId = this.state.lists[0].id;
        }else{
            nextId = this.state.lists[currIndex+1].id;
        }

        this.setState({currentListId: nextId});
    }

    render() {
        const list = this.state.lists.find(x => x.id === this.state.currentListId);

        return (
            <View style={styles.container}>
                <GestureRecognizer style={styles.titleContainer}
                                   onSwipeLeft={(state) => this.onSwipeLeft(state)}
                                   onSwipeRight={(state) => this.onSwipeRight(state)}>
                    <Text style={styles.title}>{list.title}</Text>
                </GestureRecognizer>
                <List
                      content={list.items.sort(this.sorter)}
                      addItem={(item) => this.addItemToList(list.id, item)}
                      updateItem={(item) => this.updateItemInList(list.id, item)}
                      removeItem={(itemId) => this.removeItemFromListHandler(list.id, itemId)} />
            </View>
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
