import ReactQuill from 'react-quill';

import { CustomToolbar } from '../CustomToolbar/CustomToolbar';

export const Editor = () => {
    return (
        <div className="editor">
            <CustomToolbar />
            <ReactQuill theme="snow"
            modules={modules}
            formats={formats} />
        </div>
    )
}

function insertStar(this: any) {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "★");
    this.quill.setSelection(cursorPosition + 1);
}

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'align',
    'link', 'image', 'color', 
    'formula', 'background', 'script',
]


const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            insertStar: insertStar
        }
    }
};
