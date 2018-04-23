import React from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableWithoutFeedback,Picker} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class ListItem extends React.Component {

    constructor(props){
        super(props);
    }

    titleValue;

    state = {
        edit:false
    }

    onEdit = () => {

        if(!this.props.isDone)
            this.setState({edit: true})
    }

    onPriorityEdit = () => {
        if(!this.props.isDone)
            this.props.editPriority();
    }

    afterEdit = () => {
        this.props.toggleTitle(this.title);
        this.setState({edit: false})
    }

    afterAdd = () =>{
        this.props.onAdd(this.title);
    }

    onPrioritySelected = (val) => {
        this.props.editPriority(val);
        this.setState({editPriority: false})
    }


    render() {
        this.title = this.props.title;
        let containerStyles = [styles.container];
        let priorityStyles = [styles.priority];
        let titleStyles = [styles.titleValue];
        let rightSwipeButtons = [
            {backgroundColor: 'red', text: 'Remove', type: 'delete', onPress:this.props.remove}];
        let leftSwipeButtons = [];
        let title = null;

        if(this.props.isDone){
            titleStyles.push(styles.doneTitle);
            containerStyles.push(styles.doneContainer);
            rightSwipeButtons.unshift({backgroundColor: '#f2f2f2',
                color: 'black', text: 'Back', type: 'primary',onPress: this.props.toggleDone});

        }else{
            let p = null;

            switch(this.props.priority){
                case 1:
                    p ='red';
                    break;
                case 2:
                    p ='yellow';
                    break;
                case 3:
                    p ='green';
                    break;
                default:
                    p ='transparent';
            }

            priorityStyles.push(styles[p]);
            rightSwipeButtons.push({backgroundColor: 'lightgreen', text: 'Done', type: 'primary', onPress: this.props.toggleDone});
            leftSwipeButtons.push({backgroundColor:p,text:'', onPress: this.onPriorityEdit})
        }

        if(!this.props.isDone && this.state.edit){
            title = (<TextInput value={this.props.title}
                               style={styles.titleValue} autoFocus={true}
                               onChangeText={(text)  => this.title = text}
                                onEndEditing={this.afterEdit}/>);

        }else if (this.props.edit){

            title = (<TextInput style={styles.titleValue} autoFocus={true} placeholder="New Task"
                                onChangeText={(text)  => this.title = text}
                                onEndEditing={this.afterAdd}/>);

        }else{
            title = (<Text style={[titleStyles]}>{this.props.title}</Text>);
        }




        return (

                <Swipeout right={rightSwipeButtons} left={leftSwipeButtons}
                          autoClose={true} scroll={() => {}}
                          backgroundColor='transparent'>
                    <View style={containerStyles}>
                        <View style={priorityStyles}/>
                        <TouchableWithoutFeedback onPress={this.onEdit}>
                            <View style={styles.title}>
                                {title}
                            </View>
                        </TouchableWithoutFeedback>
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
    transparent:{
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
       paddingRight: 25,
        height: 62
    },
    priority:{
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
