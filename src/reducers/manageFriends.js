let state = {friends: []}

export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND': {
            return {friends: [...state.friends, action.friend]}
        }
        case 'REMOVE_FRIEND': {
            let x = [...state.friends].filter(friend => friend.id !== action.id)
            return {friends: x}
        }
        default: {
            return state
        }
    }
}
