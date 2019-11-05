import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Tab} from 'semantic-ui-react';
import TaskList from './TaskList';

import {loadTasks} from '../actions/tasks';
import apiUrls from './../constants/apiUrls';

class ProjectList extends React.Component {
    componentDidMount() {
        this.props.loadTasks(apiUrls.task);
    }
    
    render() {
        const panes = this.props.projects.map(
            item => ({
                menuItem: item.name,
                render: () => (
                    <Tab.Pane>
                        <TaskList projectId={item.id} />
                    </Tab.Pane>
                ),
            }),
        );

        return (
            <Tab
                menu={{fluid: true, vertical: true, tabular: 'right'}}
                panes={panes}
            />
        );
    }
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })),
};

ProjectList.defaultProps = {
    projects: [],
};

const mapStateToProps = ({projectsState}) => ({
    projects: Object.values(projectsState.projects),
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({loadTasks}, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectList);
