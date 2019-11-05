import {combineReducers} from 'redux';

import tasks from './tasks';
import projects from './projects';
import users from './users';

export default combineReducers({
    tasksState: tasks,
    projectsState: projects,
    usersState: users,
});
