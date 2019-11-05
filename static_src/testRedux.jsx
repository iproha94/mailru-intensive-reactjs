import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

const taskReducer = (store = {taskList: []}, action) => {
    console.log('taskReducer', action.type);
    switch (action.type) {
        case "CREATE_TASK":
            return {
                taskList: [
                    action.payload,
                    ...store.taskList,
                ],
            };
        default:
            return store;
    }
};

const userReducer = (store = {userList: []}, action) => {
    console.log('userReducer', action.type);
    return store;
};

const reducer = combineReducers({
    tasks: taskReducer,
    users: userReducer,
});

const initialStore = {};

export const logger1 = store => next => (action) => {
    console.log('logger 1', action);
    const result = next(action);
    return result;
};

export const logger2 = store => next => (action) => {
    console.log('logger 2', action);
    const result = next(action);
    return result;
};


const middlewares = applyMiddleware(logger1, logger2);

const store = createStore(reducer, initialStore, compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__(),
));

console.log(store.getState());

store.subscribe(
    () => {
        console.log("subscriber 1", store.getState());
    },
);

store.dispatch({
    type: "CREATE_TASK",
    payload: "New task1",
});
