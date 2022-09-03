import React, { HTMLAttributes } from "react";
import { Avatar } from "../Avatar";

export interface PageHeaderProps {
    preTitle?: string | React.ReactNode;
    title: string;
    action?: React.ReactNode;
    subTitle?: React.ReactChild;
    avatar?: any;
    bordered?: boolean;
}

const PageHeader: React.FC<PageHeaderProps & HTMLAttributes<HTMLDivElement>> = ({
    preTitle,
    title,
    action,
    avatar,
    subTitle,
    bordered,
    children,
    className,
    ...props
}) => {
    const classes = [
        'page-header',
        bordered && 'page-header-border',
        className
    ].filter(Boolean).join(' ');
    return (
        <div {...props} className={classes}>
            <div className="row align-items-center">
                {typeof avatar === 'string' ? (
                    <div className="col-auto"><img className="avatar avatar-md" src={avatar} /></div>
                ) : avatar ? (
                    <div className="col-auto">{avatar}</div>
                ) : ''}

                <div className="col">
                    {typeof preTitle === 'string' ? (
                        <div className="page-pretitle">
                            {preTitle}
                        </div>
                    ) : preTitle ? preTitle : ''}

                    <h2 className="page-title">
                        {title}
                    </h2>
                    <div className="page-subtitle">
                        {subTitle}
                    </div>
                </div>
                <div className="col-auto ms-auto">
                    {action}
                </div>
            </div>
        </div>
    )
}

export default PageHeader;