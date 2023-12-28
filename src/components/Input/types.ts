import React, { CSSProperties } from 'react'


export interface InputProps {
    style?: CSSProperties;
    size?: 'lg' | 'sm';
    id?: string;
    label?: string;
    name?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: ((value: any) => void) | undefined;
    onClick?: (() => void) | undefined;
}