import React from 'react';
import { MarkdownInput } from '../../components/MarkdownInput/MarkdownInput';
import { MarkdownPreview } from '../../components/MarkdownPreview/MarkdownPreview';
import { TextField } from '../../components/TextField/TextField';
import { Toggle } from '../../components/Toggle/Toggle';
import { NoteCreatorContext } from '../../context/NoteCreator/NoteCreatorContext';
import './CreateAndEdit.less';

export function CreateAndEdit() {
    const {
        body,
        title,
        isGlobal,
        onBodyChanged,
        onTitleChanged,
        onIsGlobalChanged,
    } = React.useContext(NoteCreatorContext);

    return (
        <div className="mn-create-and-edit">
            <div className="mn-create-and-edit__content">
                <div className="mn-create-and-edit__content-left">
                    <div className="mn-create-and-edit__content-left-header">
                        <TextField value={title} onChange={onTitleChanged} />
                        <Toggle
                            id="is-global"
                            label={'Is Global'}
                            value={isGlobal}
                            onChange={onIsGlobalChanged}
                        />
                    </div>
                    <div className="mn-create-and-edit__content-left-markdown">
                        <MarkdownInput value={body} onChange={onBodyChanged} />
                    </div>
                </div>

                <div className="mn-create-and-edit__content-right">
                    <div className="mn-create-and-edit__content-left-header">
                        <h3>Preview</h3>
                    </div>
                    <div className="mn-create-and-edit__content-right-preview">
                        <MarkdownPreview value={body} />
                    </div>
                </div>
            </div>
        </div>
    );
}
