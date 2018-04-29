


export const types = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    REMOVE: 'REMOVE',
    SELECT_LIST_PREV: 'SELECT_LIST_PREV',
    SELECT_LIST_NEXT: 'SELECT_LIST_NEXT'
}


export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    },
    update: (item) => {
        return {type: types.UPDATE, payload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, payload: index}
    },
    selectPrevList: () => {
        return {type: types.SELECT_LIST_PREV}
    },
    selectNextList: () => {
        return {type: types.SELECT_LIST_NEXT}
    }
}