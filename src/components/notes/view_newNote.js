import React, { Component } from 'react'
import {
  View,
  TextInput,
  BackHandler,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'

import Toolbar from './Toolbar'
import TickButton from '../buttons/TickButton'
import BackButton from '../buttons/BackButton'
import { styles } from '../../styles/styles'
import { getColor } from '../../util/helpers'
import { addNote } from '../../actions/index'


class NewNote extends Component {
  constructor(props) {
    super(props);

    this._handleBackButton = this._handleBackButton.bind(this);

    this.state = {
      title: '',
      desc: ''
    }
  }

  componentDidMount() {
      BackHandler.addEventListener('backPressed', this._handleBackButton)
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('backPressed', this._handleBackButton)
  }

  _handleBackButton() {
    if (this.state.title === '') {
      this.goBack()
    } else {
      this.addNote()
    }
    this.goBack()
    return true
  }

  render() {
    return (
      <View style={ styles.addNotesContainer }>
        <StatusBar
          backgroundColor={getColor('paperTeal700')}
          barStyle="light-content"
          animated={true}
        />
        <Toolbar title="Add New Note" color={getColor('paperTeal')}/>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.inputTitleStyle}
            autoFocus={true}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            selectionColor={getColor('paperTeal')}
            onChangeText={(text) => this.setState({ title: text })}
            value={this.state.title}
          ></TextInput>

          <TextInput
            style={styles.inputDescriptionStyle}
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            selectionColor={getColor('paperTeal')}
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.desc}
          />
        </View>

        <View>
          <TickButton onBtnPress={this.addNote.bind(this)} />
          <BackButton onBtnPress={this.goBack.bind(this)} />
        </View>

      </View>
    )
  }

  goBack() {
    this.props.navigator.goBack();
  }

  addNote() {
    this.props.addNote({
      title: this.state.title,
      description: this.state.desc
    });
    this.goBack()
  }
}

export default connect(null, { addNote })(NewNote)
