import React from 'react';
import fetch from 'isomorphic-fetch';

import {Input, Button} from 'semantic-ui-react';

import apiUrls from './../constants/apiUrls';

export default class TaskForm extends React.Component {
    state = {
        project_id: 15,
        text: '',
        description: '',
        status: 1,
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onClick = () => {
        fetch(apiUrls.task, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
            },
        }).then(
            body => body.json(),
        ).then(
            json => this.props.onCreate(json),
        );
    };

    render() {
        return (
            <div>
                <Input
                    onChange={this.onChange}
                    name="text"
                    value={this.state.text}
                    placeholder="Заголовок"
                />
                <Input
                    onChange={this.onChange}
                    name="description"
                    value={this.state.description}
                    placeholder="Описание"
                />
                <Button
                    onClick={this.onClick}
                >
                    Создать
                </Button>
            </div>
        );
    }
};


