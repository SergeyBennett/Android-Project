import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import ListItem from "./ListItem";



export default class List extends React.Component {

    constructor(props){
        super(props);
    }

    onSwipeDown = (state) => {
        alert('swipe down')
    }


    render() {

        const items = this.props.content.map( item =>
             <ListItem  title={ item.title}
                        priority={item.priority}
                        isDone={item.done}
                        remove={() => this.props.removeItem(item.id)}
                        key={item.id}/>);


        return (

            <ScrollView>{items}</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        bottom: 0
    }
});
