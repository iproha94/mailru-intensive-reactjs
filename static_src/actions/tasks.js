import {CALL_API, getJSON} from 'redux-api-middleware';
import {normalize} from 'normalizr';

import {task, project, user} from '../utils/schemas';

export const START_TASK_LOADING = 'START_TASK_LOADING';
export const SUCCESS_TASK_LOADING = 'SUCCESS_TASK_LOADING';
export const ERROR_TASK_LOADING = 'ERROR_TASK_LOADING';

export const loadTasks = url => ({
    [CALL_API]: {
        credentials: 'include',
        endpoint: url,
        method: 'GET',
        types: [
            START_TASK_LOADING,
            {
                type: SUCCESS_TASK_LOADING,
                payload: (action, state, res) => (
                    getJSON(res).then(
                        (json) => {
                            const normalizedData = normalize(
                                json.results,
                                [task],
                            );
                            delete json.results;
                            return Object.assign({}, json, normalizedData);
                        },
                    )
                ),
            },
            ERROR_TASK_LOADING,
        ],
    },
});
