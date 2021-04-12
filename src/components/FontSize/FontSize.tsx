import Quill from 'quill';

const Size = Quill.import('formats/size');

Size.whitelist = ['8', '10', '12', '14', '18', '24', '30', '36', '48', '60'];
Quill.register(Size, true);

export const FontSize = () => {
    return (
        <select className="ql-size" defaultValue={""} onChange={e => e.persist()}>
            <option selected />
            <option value="8" />
            <option value="10" />
            <option value="12" />
            <option value="14" />
            <option value="18" />
            <option value="24" />
            <option value="30" />
            <option value="36" />
        </select>
    )
}
