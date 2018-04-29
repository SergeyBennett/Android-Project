import { combineReducers } from 'redux'
import NotesReducer from './reducer_notes'
import CurrentNoteReducer from './reducer_current'
import ListsReducer from './reducer_lists'


const rootReducer = combineReducers({
  allNotes: NotesReducer,
  currentNote: CurrentNoteReducer,
  lists: ListsReducer
})

export default rootReducer
