import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import Task from './Task';

class TaskList extends React.Component {
    render() {
        if (this.props.isLoading) {
            return <div>Загрузка...</div>;
        }

        const tasks = this.props.tasks.filter(
            item => item.project === this.props.projectId,
        ).map(
            item => (
                <Task
                    key={item.id}
                    task={item}
                />
            ),
        );

        return (
            <div>{tasks}</div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(Task.propTypes.task),
    isLoading: PropTypes.bool,
    projectId: PropTypes.number.isRequired,
};

TaskList.defaultProps = {
    tasks: [],
    isLoading: false,
};

const mapStateToProps = ({tasksState}) => ({
    tasks: Object.values(tasksState.tasks),
    isLoading: tasksState.isLoading,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({}, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskList);
