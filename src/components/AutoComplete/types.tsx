import React, { CSSProperties, PropsWithChildren } from 'react'

interface DefaultOptionType {
    label: string,
    value: string
}

export interface AutoCompleteProps extends PropsWithChildren {
    options: [{ label: string; value: string}];
    style: CSSProperties,
    size?: 'lg' | 'sm',
    placeholder: string ,
    className: string,
    caseSensitive: boolean,
    name: string,
    tokenSeparators: {},
    onChange?: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined,
    onSelect?: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined,
    onSearch?: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined,
}
