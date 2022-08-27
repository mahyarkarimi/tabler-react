import Badges from "../Badges/badges";
import React, { useMemo } from "react";
import { InputProps } from './types';

const Input = ({
    className,
    style,
    size,
    id,
    label,
    name,
    type,
    value,
    placeholder,
    onChange,
    onClick,
    ...props
}: InputProps) => {


    const classes = useMemo(() => {

        return [
            'form-control',
            size && `form-control-${size}`,
            className
        ].filter(Boolean).join(' ');
    }, [className, size]);
    
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} id={id} name={name} placeholder={placeholder} style={style} onClick={onClick} value={value} onChange={onChange} className={classes}  {...props}/>
        </>
    )
}

export default Input;
