import React, { HTMLAttributes } from "react";

export interface FlexProps {
    inline?: boolean;
    gap?: 0 | 1 | 2 | 3 | 4 | 5;
    stack?: 'horizontal' | 'vertical';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
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
const Flex: React.FC<FlexProps & HTMLAttributes<HTMLDivElement>> = ({
    inline,
    direction,
    className,
    children,
    gap,
    stack,
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
        inline ? 'd-inline-flex' : 'd-flex',
        direction && `flex-${direction}`,
        stack === 'horizontal' && `hstack`,
        stack === 'vertical' && `vstack`,
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


export interface FlexItemProps {
    order?: 'first' | 0 | 1 | 2 | 3 | 4 | 5 | 'last';
}

export const FlexItem: React.FC<FlexItemProps & HTMLAttributes<HTMLDivElement>> = ({
    order,
    className,
    children,
    ...props
}) => {
    const classes = [
        order && `order-${order}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}

export default Flex;