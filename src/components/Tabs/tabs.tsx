import React, { useMemo, useState } from "react";
import { CSSProperties } from "react";

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
        Required<Pick<T, K>>
        & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys]

interface TabItem {
    id: string;
    title: string;
    content?: any;
    dropDown?: any[];
    alignEnd?: boolean;
}

export interface TabsProps {
    className?: string;
    style?: CSSProperties;
    card?: boolean;
    fullWidth?: boolean;
    allCaps?: boolean;
    tabs: TabItem[] | 'dropDown' | 'content';
    defaultActiveIndex?: number;
}
const Tabs = ({
    className,
    style,
    tabs,
    card,
    fullWidth,
    allCaps,
    defaultActiveIndex,
}: TabsProps) => {
    const rnd = (Math.random() * 10000).toFixed();

    const [active, setActive] = useState<number>(defaultActiveIndex || 0);

    const classes = useMemo(() => {
        return [
            `card${card ? '-tabs' : ''}`,
            className
        ].filter(Boolean).join(' ')
    }, [card, className]);

    const generateTabContent = (tab: TabItem, i: number) => {
        if (tab.dropDown && tab.dropDown?.length > 0) {
            return (
                <li key={i} className={`nav-item dropdown ${tab.alignEnd ? 'ms-auto' : ''}`}>
                    <a className='nav-link dropdown-toggle' data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        {tab.title}
                    </a>
                    <div className="dropdown-menu">
                        {tab.dropDown?.map((d, di) => (
                            <a key={di} className="dropdown-item" style={{ cursor: 'pointer' }}>
                                {d}
                            </a>
                        ))}
                    </div>
                </li>
            )
        }
        return (
            <li onClick={() => setActive(i)} id={i.toString()} className={`nav-item ${tab.alignEnd ? 'ms-auto' : ''}`} role="presentation">
                <a href={`#${rnd}-${tab.id}`} data-bs-toggle="tab" className={`nav-link ${active == i ? 'active' : ''}`}>
                    {tab.title}
                </a>
            </li>
        )
    }

    const navClasses = useMemo(() => {
        return [
            'nav',
            'nav-tabs',
            fullWidth && 'nav-fill',
            allCaps && 'nav-tabs-alt',
        ].filter(Boolean).join(' ');
    }, [allCaps, fullWidth]);

    return (
        <div className={classes} style={style}>
            <ul className={navClasses} data-bs-toggle="tabs">
                {typeof tabs !== 'string' && tabs.map((tab, i) => generateTabContent(tab, i))}
            </ul>
            <div className="tab-content">
                {typeof tabs !== 'string' && tabs.map((tab, i) => (
                    <div id={tab.id} className={`tab-pane ${active == i ? 'active show' : ''}`}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs;