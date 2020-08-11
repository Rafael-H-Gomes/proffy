import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    example?: string;
}

const Input: React.FC<InputProps> = ({ label, name, example, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label><div className="example"><p>{example}</p></div>
            <input type="text" id={name} {...rest} />
        </div>
    );    
} 

export default Input;
