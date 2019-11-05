export const logger = store => next => (action) => {
    console.log('logger', action);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};
