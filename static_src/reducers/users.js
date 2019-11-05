import update from 'react-addons-update';

const initialState = {
    users: {},
};

export default function users(store = initialState, action) {
    let newStore = store;
    if (
        action.payload &&
        action.payload.entities &&
        action.payload.entities.users
    ) {
        newStore = update(
            store,
            {users: {$merge: action.payload.entities.users}},
        );
    }

    return newStore;
}
