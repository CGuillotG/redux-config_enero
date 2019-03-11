

export default function books(state = [], action) {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, action.book]
        case "DELETE_BOOK":
            return [...state.filter(b => b.id !== action.book.id)]
        case "EDIT_BOOK":
        case "GET_BOOKS":
        default:
            return state
    }
}

