import React, { HTMLAttributes } from "react";

export interface RowProps {
    cols?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6;

    inline?: boolean;
    gap?: 0 | 1 | 2 | 3 | 4 | 5;
    direction?: 'row' | 'row-reverse';
    grow?: boolean;
    shrink?: boolean;
    spaceX?: 'default' | 0 | 1 | 2 | 3 | 4 | 5 ;
    spaceY?: 'default' | 0 | 1 | 2 | 3 | 4 | 5 ;
    wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'stretch' | 'around';
    alignSelf?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}
const Row: React.FC<RowProps & HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    cols,
    inline,
    direction,
    gap,
    grow,
    shrink,
    wrap,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    spaceX,
    spaceY,
    ...props
}) => {
    const classes = [
        'row',
        cols && `row-cols-${cols}`,

        inline && 'd-inline-flex',
        direction && `flex-${direction}`,
        grow !== undefined && grow ? 'flex-grow-1' : 'flex-grow-0' ,
        shrink !== undefined && shrink ? 'flex-shrink-1' : 'flex-shrink-0' ,
        justifyContent && `justify-content-${justifyContent}`,
        alignContent && `align-content-${alignContent}`,
        alignItems && `align-items-${alignItems}`,
        alignSelf && `align-self-${alignSelf}`,
        wrap && `flex-${wrap}`,
        spaceX && spaceX === 'default' ? 'space-x' : `space-x-${spaceX}`,
        spaceY && spaceY === 'default' ? 'space-y' : `space-y-${spaceY}`,
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}

export default Row;