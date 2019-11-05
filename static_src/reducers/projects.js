import update from 'react-addons-update';

const initialState = {
    projects: {},
};

export default function projects(store = initialState, action) {
    let newStore = store;
    if (
        action.payload &&
        action.payload.entities &&
        action.payload.entities.projects
    ) {
        newStore = update(
            store,
            {projects: {$merge: action.payload.entities.projects}},
        );
    }

    return newStore;
}
