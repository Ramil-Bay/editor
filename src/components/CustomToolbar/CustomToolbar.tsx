import Quill from 'quill';

const Font = Quill.import('formats/font');

Font.whitelist = ['serif', 'monospace', 'times-new-roman', 'sans-serif'];
Quill.register(Font, true);

export const CustomToolbar = () => (
  
    <div id="toolbar" className="ql-toolbar">
      <select className="ql-font" defaultValue={""} onChange={e => e.persist()}>
        <option value="monospace" />
        <option value="serif" />
        <option value="times-new-roman" />
        <option selected />
      </select>
      <select className="ql-size" defaultValue={""} onChange={e => e.persist()}>
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <select className="ql-color">
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option>
      </select>
      <select className="ql-background">
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option>
      </select>
      <button className="ql-script" value='sub' />
      <button className="ql-script" value='super' />
      <button className="ql-blockquote" />
      <button className="ql-code-block" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
      <select className="ql-align">
        <option selected />
        <option value="center" />
        <option value="right" />
        <option value="justify" />
      </select>
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-formula" />
      <button className="ql-insertStar">
        <span className="ql-insertStar__logo octicon octicon-star" />
      </button>
    </div>
  )