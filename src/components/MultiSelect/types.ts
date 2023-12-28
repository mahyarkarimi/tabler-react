import React, { CSSProperties } from 'react'

interface DefaultOptionType {
    label: string,
    value: string
}

export interface MultiSelectProps {
    options: [];
    style: CSSProperties,
    size?: 'lg' | 'sm',
    placeholder: string ,
    className: string,
    name: string,
    tokenSeparators: {},
    children: any,
    onChange?: ((value: any) => void) | undefined,
}