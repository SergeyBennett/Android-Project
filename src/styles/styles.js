import {getColor} from "../util/helpers";

export const styles = {
        main_positioning :{
            flex:1,
            flexDirection: 'column',

        },
      main_container:{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          height:100
      },
        selection_button:{
            alignItems:'center',
            padding: 12,
            margin: 15,
            backgroundColor:getColor('paperBlue'),
            borderColor: getColor('paperBlue'),
            borderWidth: 1,
            borderStyle: 'solid'
        },
    selection_button_text:{
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold'
    },
      selection_menu:{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          backgroundColor: '#ffffff'
      },
      allNotesContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
      },
      emptyListContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 56
      },
      emptyList: {
        fontSize: 16
      },

      addNotesContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
      },
      textInputContainer: {
        flex: 1
      },
      inputTitleStyle: {
        height: 60,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        fontSize: 20
      },
      inputDescriptionStyle: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 60,
        fontSize: 16,
        textAlignVertical: 'top'
      }
}
