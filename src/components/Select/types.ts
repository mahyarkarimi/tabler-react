import React, { CSSProperties } from 'react'

interface DefaultOptionType {
    label: string,
    value: string
}

export interface SelectProps {
    options: [],
    style: CSSProperties,
    size?: 'lg' | 'sm',
    className: string,
    onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined,
}