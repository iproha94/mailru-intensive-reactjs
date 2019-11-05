import React from 'react';
import PropTypes from 'prop-types';

import {Card} from 'semantic-ui-react';

export default class Task extends React.Component {
    render() {
        return (
            <div className="row">
                <Card
                    meta={this.props.author}
                    header={this.props.task.text}
                    description={this.props.task.description}
                />
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.shape({
        text: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    author: PropTypes.string.isRequired,
};

Task.defaultProp = {
    task: {
        text: 'название задачи пусто',
        description: 'описание пусто',
    },
    author: 'noname',
};
