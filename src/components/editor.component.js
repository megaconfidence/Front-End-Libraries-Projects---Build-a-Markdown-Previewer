import React from 'react';

const Editor = ({value, onChange}) => {
    return (
        <textarea id="editor" onChange={onChange} value={value.value}></textarea>
    );
}

export default Editor;