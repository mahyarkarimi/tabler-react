import React, { HTMLAttributes } from "react";

export interface ColProps {
    col?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
const Col: React.FC<ColProps & HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    col,
    ...props
}) => {
    const classes = [
        'col',
        col && `col-${col}`,
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}

export default Col;