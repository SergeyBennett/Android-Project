import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import ListItem from "./ListItem";



export default class List extends React.Component {

    constructor(props){
        super(props);
    }



    toggleDone = (item) => {
        let i = {...item};

        i.done = !i.done;

        this.props.updateItem(i);
    }

    toggleTitle = (title, item) => {
        let i = {...item};

        i.title = title;

        this.props.updateItem(i);
    }


    render() {


        const items = this.props.content.map( item =>
             <ListItem  title={ item.title}
                        priority={item.priority}
                        isDone={item.done}
                        toggleDone={() => this.toggleDone(item)}
                        toggleTitle={(event) => this.toggleTitle(event, item)}
                        remove={() => this.props.removeItem(item.id)}
                        key={item.id}/>);


        return (

                <ScrollView style={styles.container}>{items}</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});
