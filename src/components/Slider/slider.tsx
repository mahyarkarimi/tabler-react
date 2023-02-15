import React, { CSSProperties, useEffect } from "react";
import RCSlider, { SliderProps } from "rc-slider";
import 'rc-slider/assets/index.css';

const Slider: React.FC<SliderProps> = ({
    ...props
}) => {
    const trackStyle: CSSProperties = {
        backgroundColor: 'var(--tblr-primary)'
    }
    const handleStyle: CSSProperties = {
        borderColor: 'var(--tblr-primary)',
    }
    useEffect(() => {
        const handle = document.querySelector<HTMLDivElement>('div.rc-slider-handle');
        console.log(handle)
        if (handle) {
            handle.onmouseenter = function (ev) {
                handle.style.boxShadow = '0 0 0 5px var(--tblr-primary)';
                handle.style.transition = 'box-shadow 0.3s ease'
            }
            handle.onmouseleave = function (ev) {

                handle.style.boxShadow = 'none'
            }
        }
    }, []);
    return (
        <div style={{ width: 'auto', height: '24px', margin: 'm-4' }}>
            <RCSlider {...props} dots={false} trackStyle={trackStyle} handleStyle={handleStyle} />
        </div>
    )
}
export default Slider;