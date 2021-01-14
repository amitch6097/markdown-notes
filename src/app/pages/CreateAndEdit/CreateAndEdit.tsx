import React from 'react';
import { AppBar } from '../../components/AppBar/AppBar';
import { MarkdownInput } from '../../components/MarkdownInput/MarkdownInput';
import { MarkdownPreview } from '../../components/MarkdownPreview/MarkdownPreview';
import { TextField } from '../../components/TextField/TextField';
import { Toggle } from '../../components/Toggle/Toggle';
import './CreateAndEdit.less';

export interface INoteCreatorProps {
    placeholder?: string;
    title?: string;
    defaultValue?: string;
    isGlobal?: boolean;

    onCancel: () => void;
    onSave: (note: { title: string; body: string; isGlobal: boolean }) => void;
}

interface INoteCreatorState {
    value?: string;
    title?: string;
    isGlobal?: boolean;
}

export class CreateAndEdit extends React.Component<
    INoteCreatorProps,
    INoteCreatorState
> {
    constructor(props: INoteCreatorProps) {
        super(props);
        this.state = {
            value: props.defaultValue ? props.defaultValue : '',
            title: props.title ? props.title : 'New Note',
            isGlobal: props.isGlobal !== undefined ? props.isGlobal : false,
        };
    }

    handleValueChange = (value) => {
        this.setState({ value });
    };

    handleChangeTitle = (title) => {
        this.setState({ title });
    };

    handleChangeIsGlobal = (isGlobal) => {
        this.setState({ isGlobal });
    };

    render() {
        return (
            <div className="mn-create-and-edit">
                <div className="mn-create-and-edit__app-bar">
                    <AppBar
                        actions={[
                            {
                                label: 'Cancel',
                                type: 'secondary',
                            },
                            {
                                label: 'Save Note',
                                type: 'primary',
                            },
                        ]}
                    />
                </div>
                <div className="mn-create-and-edit__content">
                    <div className="mn-create-and-edit__content-left">
                        <div className="mn-create-and-edit__content-left-header">
                            <TextField
                                value={this.state.title}
                                onChange={this.handleChangeTitle}
                            />
                            <Toggle
                                id="is-global"
                                label={'Is Global'}
                                value={this.state.isGlobal}
                                onChange={this.handleChangeIsGlobal}
                            />
                        </div>
                        <div className="mn-create-and-edit__content-left-markdown">
                            <MarkdownInput
                                value={this.state.value}
                                onChange={this.handleValueChange}
                            />
                        </div>
                    </div>

                    <div className="mn-create-and-edit__content-right">
                        <div className="mn-create-and-edit__content-left-header">
                            <h3>Preview</h3>
                        </div>
                        <div className="mn-create-and-edit__content-right-preview">
                            <MarkdownPreview value={this.state.value} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
