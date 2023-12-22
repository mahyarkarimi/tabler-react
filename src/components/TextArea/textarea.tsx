import React, { HTMLAttributes } from "react";

export interface TextAreaProps {
    autosize?: boolean;
}

const TextArea: React.FC<TextAreaProps & HTMLAttributes<HTMLTextAreaElement>> = ({ autosize, className, ...props}) => {
    const textareaProps = autosize ? { 'data-bs-toggle': 'autosize', ...props } : props;
    return (
        <textarea {...textareaProps} className={'form-control ' + className}></textarea>
    )
}

export default TextArea;