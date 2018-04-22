import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import List from "./List/List";

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
                {id: 4, title: "E-publishing", priority: 2, done: false},
                {id: 5, title: "Have a rest",priority:4, done: false},
                    {id: 6, title: "Android project", priority: 1, done: false},
                    {id: 7, title: "Course work", priority: 1, done: false},
                    {id: 8, title: "Intelligent systems", priority: 2, done: false},
                    {id: 9, title: "E-publishing", priority: 3, done: false},
                    {id: 10, title: "Have a rest", done: false},
                    {id: 11, title: "Android project", priority: 1, done: false},
                    {id: 12, title: "Course work", priority: 1, done: false},
                    {id: 13, title: "Intelligent systems", priority: 2, done: false},
                    {id: 14, title: "E-publishing", priority: 3, done: false},
                    {id: 15, title: "Have a rest", priority:4, done: false}
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

            if(a.priority < b.priority) return 1;
            else if(a.priority > b.priority) return -1;

            return 0;
        }
        else if(a.done) return 1;
        else return -1;
    }



    render() {
        const list = this.state.lists.find(x => x.id === this.state.currentListId);

        return (
            <View style={styles.container}>
                <Text>Lists</Text>
                <List title={list.title} content={list.items}
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
});
