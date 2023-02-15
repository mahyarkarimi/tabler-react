import React, { CSSProperties } from 'react'

interface DefaultOptionType {
    label: string,
    value: string
}

export interface AutoCompleteProps {
    options: [{ label: string; value: string}];
    style: CSSProperties,
    size?: 'lg' | 'sm',
    placeholder: string ,
    className: string,
    caseSensitive: boolean,
    name: string,
    tokenSeparators: {},
    children: any,
    onChange?: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined,
    onSelect?: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined,
    onSearch?: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined,
}
