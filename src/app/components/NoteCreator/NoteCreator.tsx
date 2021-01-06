import React from 'react';
import './NoteCreator.less';

import { MarkdownPreview, MarkdownInput } from 'react-marked-markdown';

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

export class NoteCreator extends React.Component<
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

    handleSaveClicked = () =>  {
        if (this.props.onSave) {
            this.props.onSave({
                title: this.state.title,
                body: this.state.value,
                isGlobal: this.state.isGlobal,
            });
        }
    }

    handleOnCancelClicked = () => {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }

    handleTextChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleTitleChanged = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    handleIsGlobalToggled = () => {
        this.setState({
            isGlobal: !this.state.isGlobal,
        });
    }

    clear = () => {
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className="mn-note-creator">
                <div className="mn-note-creator__header">
                    <div className="mn-note-creator__header-left">
                        <div className="mn-note-creator__header-left-title">
                            <input
                                type="text"
                                className="mn-note-creator__header-left-title-input"
                                onChange={this.handleTitleChanged}
                                value={this.state.title}
                            />
                        </div>
                        <div className="mn-note-creator__header-left-global-toggle">
                            <input
                                type="radio"
                                id="mn-note-creator-is-global-radio"
                                onChange={this.handleTitleChanged}
                                {...(this.state.isGlobal
                                    ? { checked: true }
                                    : {})}
                            />
                            {/* @ts-ignore */}
                            <label for="mn-note-creator-is-global-radio">
                                Global Note
                            </label>
                        </div>
                    </div>
                    <div className="mn-note-creator__header-right">
                        <button onClick={this.handleOnCancelClicked}>Cancel</button>
                        <button onClick={this.handleSaveClicked}>Save</button>
                    </div>
                </div>
                <div className="mn-note-creator__markdown">
                    <MarkdownInput
                        placeholder={this.props.placeholder}
                        onChange={this.handleTextChange.bind(this)}
                        value={this.state.value}
                        className="mn-note-creator__markdown-editor"
                    />

                    <MarkdownPreview
                        value={this.state.value}
                        markedOptions={{}}
                        className="mn-note-creator__markdown-preview"
                    />
                </div>
            </div>
        );
    }
}
