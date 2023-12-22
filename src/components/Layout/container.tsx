import React, { HTMLAttributes, useMemo } from "react"
import { PropsWithChildren } from "react"

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'fluid' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
const Container = ({ children, size, className, ...props }: PropsWithChildren<ContainerProps>) => {
    const classes = useMemo(() => {
        return [
            size ? `container-${size}` : 'container',
            className
        ].filter(Boolean).join(' ');
    }, [size]);

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Container;