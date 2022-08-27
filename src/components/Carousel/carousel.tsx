/**
 * @TODO Needs more check and fix
 */
import React, { CSSProperties, useState } from "react";

export interface CarouselProps {
    className?: string;
    style?: CSSProperties;
    items: {
        src: any;
        caption?: {
            title: string;
            subtitle?: string;
        };
    }[];
    defaultIndex?: number;
    indicator?: 'default' | 'dot' | 'thumb';
    indicatorPosition?: 'bottom' | 'end';
    anim?: 'slide' | 'fade';
}

const Carousel: React.FC<CarouselProps> = ({
    className,
    style,
    items,
    defaultIndex,
    indicator,
    indicatorPosition,
    anim,
}) => {
    const cid = 'carousel-element';
    const [active, setActive] = useState<number>(defaultIndex || 0);

    const classes = [
        'carousel slide',
        anim === 'fade' && 'carousel-fade',
        className
    ].filter(Boolean).join(' ');

    const indicatorClasses = [
        'carousel-indicators'
    ];
    switch (indicator) {
        case 'dot':
            indicatorClasses.push('carousel-indicators-dot');
            break;
        case 'thumb':
            indicatorClasses.push('carousel-indicators-thumb');
            break;
        case 'default':
        default:
            break;
    }
    switch (indicatorPosition) {
        case 'end':
            indicatorClasses.push('carousel-indicators-vertical');
            break;
        case 'bottom':
        default:
            break;
    }
    return (
        <div id={cid} className={classes} style={style} data-bs-ride="carousel">
            <div className={indicatorClasses.join(' ')}>
                {items.map((item, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActive(index)}
                        type="button" data-bs-target={`#${cid}`}
                        data-bs-slide-to={index}
                        className={active === index ? 'active' : ''}>
                            {indicator === 'thumb' && <img src={item.src} style={{ borderRadius: 'inherit', width: 'inhert', height: 'auto', boxShadow: 'inherit', margin: 'inherit', opacity: 'inherit' }} className="ratio ratio-4x3" />}
                    </button>
                ))}
            </div>
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div key={index} className={`carousel-item ${active === index ? 'active' : ''}`}>
                        <img className="d-block w-100" alt="" src={item.src} />
                        {item.caption && <div className="carousel-caption-background d-none d-md-block"></div>}
                        {item.caption && <div className="carousel-caption d-none d-md-block">
                            <h3>{item.caption.title}</h3>
                            <p>{item.caption.subtitle}</p>
                        </div>}
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href={`#${cid}`} role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#${cid}`} role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    )
}

export default Carousel;
