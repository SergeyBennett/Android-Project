import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,RefreshControl,Picker } from 'react-native';
import ListItem from "./ListItem";



export default class List extends React.Component {

    state = {
        addItem: false,
        editPriority:null
    }

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

    onEditPriority = (item) => {
        this.setState({editPriority:item})
    }

    editPriority = (priority) => {
        let i = {...this.state.editPriority};

        i.priority = priority;

        this.setState({editPriority:null})

        this.props.updateItem(i);
    }

    onAdd = (name) => {
        if(name){
            let item  = {title:name}
            item.done = false;
            item.id = (new Date).getMilliseconds()%12384382;
            this.props.addItem(item);
        }

        this.setState({addItem:false})
    }

    onSwipeDown = () => {

            this.setState({addItem:true})

    }

    render() {


        const items = this.props.content.map( item =>
             <ListItem  title={ item.title}
                        priority={item.priority}
                        isDone={item.done}
                        toggleDone={() => this.toggleDone(item)}
                        toggleTitle={(event) => this.toggleTitle(event, item)}
                        editPriority={() => this.onEditPriority(item)}
                        remove={() => this.props.removeItem(item.id)}
                        key={item.id}/>);
        let addItem = null;

        if(this.state.addItem){
            addItem = (<ListItem onAdd={(item)=> this.onAdd(item)} edit={true}/>);
        }

        let picker;

        if(this.state.editPriority){
            picker = (
                <View style={styles.picker}>
                    <Picker
                        selectedValue={this.state.editPriority.priority}
                        style={{height: 200, width: '100%'}}
                        onValueChange={(itemValue) => this.editPriority(itemValue)}>
                        <Picker.Item label="Red" value={1} />
                        <Picker.Item label="Yellow" value={2} />
                        <Picker.Item label="Green" value={3} />
                        <Picker.Item label="Default" value={4} />
                    </Picker>
                </View>
            );
        }


        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}
                            refreshControl={
                                <RefreshControl
                                    refreshing={false}
                                    colors={['blue']}
                                    onRefresh={this.onSwipeDown.bind(this)}
                                />}>
                    {addItem}
                    {items}
                </ScrollView>
                {picker}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    picker: {
        position:'absolute',
        top:'60%',
        height: '40%', width: '100%',
        borderTopColor: '#ccc',
        borderTopWidth: 0.7,
        backgroundColor: 'rgba(255,255,255,0.7)'
    }
});
