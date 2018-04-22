import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class ListItem extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        edit:false
    }


    render() {
        let containerStyles = [styles.container];
        let priorityStyles = [styles.priorityContainer];
        let titleStyles = [styles.titleValue];
        let rightSwipeButtons = [
            {backgroundColor: 'red', text: 'Remove', type: 'delete', onPress:this.props.remove}];
        let title = null;

        if(this.props.isDone){
            titleStyles.push(styles.doneTitle);
            containerStyles.push(styles.doneContainer);
            rightSwipeButtons.unshift({backgroundColor: '#f2f2f2',
                color: 'black', text: 'Back', type: 'primary',onPress: this.props.toggleDone});

        }else{
            let p = null;

            switch(this.props.priority){
                case 1: p ='red'; break;
                case 2: p ='yellow'; break;
                case 3: p ='green'; break;
                default: p ='def';
            }

            priorityStyles.push(styles[p]);
            rightSwipeButtons.push({backgroundColor: 'lightgreen', text: 'Done', type: 'primary', onPress: this.props.toggleDone});
        }

        if(!this.props.isDone && this.state.edit){
            title = (<TextInput value={this.props.title}
                               style={styles.titleValue}
                               onChangeText={this.props.toggleTitle}/>);
        }else{
            title = (<Text style={[titleStyles]}>{this.props.title}</Text>);
        }


        return (
            <Swipeout right={rightSwipeButtons}
                      autoClose={true}
                      backgroundColor='transparent'>
                <View style={containerStyles}>
                    <View style={priorityStyles}/>
                    <View style={styles.title}>
                        {title}
                    </View>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#DFE6E8',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    red:{
        backgroundColor: 'red'
    },
    yellow:{
        backgroundColor: 'yellow'
    },
    green:{
        backgroundColor: 'green'
    },
    def:{
        backgroundColor: 'transparent'
    },
    title: {
        padding: 20,
        flexBasis: '80%'
    },
    titleValue: {
        fontSize: 22
    },
    priorityContainer: {
        flexBasis: 5,
        backgroundColor: 'transparent',
        alignSelf: 'stretch'
    },
    removeButton: {
        flexShrink:0,
        alignSelf: 'center',
    },
    doneContainer: {
        backgroundColor: '#CCC'
    },
    doneTitle:{
        textDecorationLine: 'line-through'
    }
});
