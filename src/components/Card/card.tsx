import React, { HTMLAttributes } from "react";
import { Colors } from "../colors";
import { Ribbon, RibbonProps } from '../Ribbon'
import { AvatarSkeleton, BoxSkeleton } from '../Skeleton'
export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    header?: string;
    subtitle?: string;
    padding?: 'default' | 'sm' | 'md' | 'lg';
    borderless?: boolean;
    hoverable?: boolean;
    image?: string | typeof AvatarSkeleton | typeof BoxSkeleton;
    statusColor?: Colors;
    statusPosition?: 'top' | 'start' | 'bottom';
    stacked?: boolean;
    hoverEffect?: 'pop' | 'rotate';
    rotate?: 'left' | 'right';
    lightHeader?: boolean;
    active?: boolean;
    inactive?: boolean;
    ribbon?: RibbonProps;
    stamp?: React.ReactNode;
    color?: Colors;
    light?: boolean;
    progress?: number;
    imageAlign?: 'left' | 'right' | 'top' | 'bottom';
    footer?: React.ReactNode;
    transparentFooter?: boolean;
    imageClasses?: string;
    actions?: React.ReactNode[];
}

const Card = ({
    className = '',
    padding = 'default',
    header,
    borderless,
    hoverable,
    children,
    image,
    subtitle,
    statusColor,
    statusPosition,
    ribbon,
    hoverEffect,
    stacked,
    rotate,
    color,
    light,
    active,
    inactive,
    lightHeader,
    stamp,
    imageAlign = 'top',
    progress,
    transparentFooter,
    footer,
    actions,
    imageClasses = '',
    ...props
}: CardProps) => {
    const classes = [
        'card',
        imageAlign && ['left', 'right'].includes(imageAlign) && 'd-flex flex-column',
        stacked && 'card-stacked',
        padding && padding !== 'default' && `card-${padding}`,
        borderless && 'card-borderless',
        hoverable && 'card-link',
        rotate && ['left', 'right'].includes(rotate) && `card-rotate-${rotate}`,
        hoverEffect && ['pop', 'rotate'].includes(hoverEffect) && `card-link-${hoverEffect}`,
        active && 'card-active',
        inactive && 'card-inactive',
        color && `bg-${color}${light ? '-lt' : ''}`,
        className
    ].filter(Boolean).join(' ');

    const headerClasses = [
        'card-header',
        lightHeader && 'card-header-light'
    ].filter(Boolean).join(' ');
    if (['left', 'right'].includes(imageAlign)) {
        return (
            <div {...props} className={classes}>
                {(statusColor || statusPosition) && <div className={`card-status-${statusPosition} bg-${statusColor}`}></div>}
                <div className='row row-0 flex-fill'>
                    <div className={`col-3 ${imageAlign === 'right' ? 'order-md-last' : ''}`}>
                        {typeof image !== 'string' && image}
                        {typeof image === 'string' && <img src={image} className={`object-cover h-100 w-100 ${imageClasses}`} />}
                    </div>
                    <div className='col'>
                        {ribbon && <Ribbon {...ribbon} />}
                        {stamp && <div className="card-stamp">
                            <div className="card-stamp-icon">{stamp}</div>
                        </div>}
                        {(header || (actions && actions?.length > 0)) && <div className={headerClasses}>
                            <h3 className="card-title">{header}</h3>
                            {subtitle && <span className="card-subtitle">{subtitle}</span>}
                            {actions && <div className="card-actions">{actions?.map(action => action)}</div>}
                        </div>}
                        <div className="card-body">
                            <p className="text-muted">{children}</p>
                            {(progress && progress > 0 && progress < 100) && <div className="progress progress-sm card-progress">
                                <div className="progress-bar" style={{ width: `${progress}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} ></div>
                            </div>}
                        </div>
                        {footer && <div className={`card-footer ${transparentFooter ? 'card-footer-transparent' : ''}`}>

                        </div>}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div {...props} className={classes}>
                {(statusColor || statusPosition) && <div className={`card-status-${statusPosition} bg-${statusColor}`}></div>}
                {typeof image !== 'string' && imageAlign === 'top' && image}
                {typeof image === 'string' && imageAlign === 'top' && <img src={image} className={`card-img-top ${imageClasses}`} />}
                {ribbon && <Ribbon {...ribbon} />}
                {stamp && <div className="card-stamp">
                    <div className="card-stamp-icon">{stamp}</div>
                </div>}
                {header && <div className={headerClasses}>
                    <h3 className="card-title">{header}</h3>
                    {subtitle && <span className="card-subtitle">{subtitle}</span>}
                </div>}
                <div className="card-body">
                    {children}
                    {(progress && progress > 0 && progress < 100) && <div className="progress progress-sm card-progress">
                        <div className="progress-bar" style={{ width: `${progress}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} ></div>
                    </div>}
                </div>
                {image && imageAlign === 'bottom' && <img src={image} className={`card-img-bottom ${imageClasses}`} />}
                {footer && <div className={`card-footer ${transparentFooter ? 'card-footer-transparent' : ''}`}>
                </div>}
            </div>
        )
    }
}

export default Card;
