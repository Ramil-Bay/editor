import ReactQuill from 'react-quill';
import katex from 'katex';

import { CustomToolbar } from '../CustomToolbar/CustomToolbar';

function mounted() {
    window.katex = katex;
}

export const Editor = () => {
    return (
        <div className="editor">
            <CustomToolbar />
            <ReactQuill theme="snow"
            modules={modules}
            ref={mounted} />
        </div>
    )
}

function insertStar(this: any) {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "★");
    this.quill.setSelection(cursorPosition + 1);
}

const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            insertStar: insertStar,
        }
    }
};
