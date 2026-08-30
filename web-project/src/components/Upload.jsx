import React, { useRef } from 'react';

const Upload = ({ onImageUpload, onDocxUpload, children }) => {
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type.startsWith('image/')) onImageUpload(file);
        else if (file.name.endsWith('.docx')) onDocxUpload(file);
        else alert('รองรับแค่รูปหรือ .docx เท่านั้น');

        e.target.value = ''; // เคลียร์ค่า
    };

    return (
        <>
            <div onClick={() => inputRef.current.click()} className="inline-block cursor-pointer">
                {children}
            </div>
            <input type="file" ref={inputRef} onChange={handleChange} accept="image/*,.docx" className="hidden" />
        </>
    );
};

export default Upload;
