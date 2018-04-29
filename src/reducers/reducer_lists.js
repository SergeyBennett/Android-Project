import {types} from "../actions/list"

const initialState = {
    lists:[
        {id:1, title: "To Do", items: []},
        {id:2, title: "Shopping", items: []},
    ],
    currentListId: 1
}

export default (state = initialState, action) => {
    let listIndex = state.lists.findIndex((x => x.id === state.currentListId));
    let list = state.lists[listIndex];
    let items = null;
    let lists = null;
    let itemIndex = null;

    switch(action.type) {
        case types.ADD:
            items = [action.payload,...list.items];

            lists = [...(state.lists)];
            list = {...list};

            list.items = items.sort(sorter);
            lists[listIndex] = list;

            return {...state,lists: lists};
        case types.UPDATE:

            itemIndex = list.items.findIndex(i => i.id === action.payload.id);

            items = [...list.items];
            items[itemIndex] = {...action.payload};

            lists = [...state.lists];
            list = {...list};

            list.items = items.sort(sorter);
            lists[listIndex] = list;

            return {...state,lists: lists};
        case types.REMOVE:

            itemIndex = list.items.findIndex(item => item.id === action.payload);

            items = [...list.items].sort( sorter );
            items.splice(itemIndex,1);

            lists = [...state.lists];
            list = {...list};

            list.items = items;
            lists[listIndex] = list;

            return {...state,lists: lists};
        case types.SELECT_LIST_PREV:
            let prevId = null;

            if(listIndex === 0){
                prevId = state.lists[state.lists.length-1].id;
            }else{
                prevId = state.lists[listIndex-1].id;
            }

            return {...state, currentListId: prevId};
        case types.SELECT_LIST_NEXT:
            let nextId = null;

            if(listIndex === state.lists.length-1){
                nextId = state.lists[0].id;
            }else{
                nextId = state.lists[listIndex+1].id;
            }
            return {...state, currentListId: nextId};
        default:
            return state;
    }
}

const sorter = (a,b) => {
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
        if(a.priority && b.priority){
            if(a.priority > b.priority)
                return 1;

            if(a.priority < b.priority)
                return -1;

            return 0;
        }
        else if(a.priority) return 1;
        else if(b.priority) return -1;


    }
    return 0;
}