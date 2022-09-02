import React, { useMemo } from 'react';
import type { CSSProperties, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Colors } from '../colors';

export interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    htmlType?: string;
    className?: string;
    style?: CSSProperties;
    mode?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    disabled?: boolean;
    ghost?: boolean;
    color?: Colors;
    square?: boolean;
    pill?: boolean;
    outline?: boolean;
    loading?: boolean;
    spinner?: boolean;
    light?: boolean;
    dropDown?: boolean;
    size?: 'large' | 'small' | 'default'
    children?: string;
    value?: string;
    onClick?: () => void
};

interface ButtonListProps {
    className?: string;
    style?: CSSProperties;
    children: any;
    justify?: 'end' | 'center';
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    className,
    style,
    mode = 'primary',
    disabled,
    color,
    ghost,
    square,
    light,
    pill,
    outline,
    dropDown,
    spinner,
    loading,
    size = 'default',
    children,
    value,
    onClick,
    ...props
}) => {

    const getSize = (s: string) => {
        switch(s){
            case 'large':
                return 'btn-lg';
            case 'small':
                return 'btn-sm';
            case 'default':
            default:
                return '';
        }
    }
    const getMode = () => {
        if (outline) {
            return `btn-outline-${mode}`;
        }
        if (ghost) {
            `btn-outline-${mode}`
        }
        return `btn-${mode}`
    }
    const classes = useMemo(() => {

        return [
            'btn',
            mode && getMode(),
            disabled && 'disabled',
            color && `btn-${color}${light? '-lt' : ''}`,
            square && 'btn-square',
            pill && 'btn-pill',
            getSize(size),
            loading && 'btn-loading',
            dropDown && 'dropdown-toggle',
            loading && `btn-loading`,
            className
        ].filter(Boolean).join(' ');
    }, [mode, disabled, color, square, pill, ghost, outline, className, size, loading]);

    
    return (
        <button type={type} className={classes} style={style} value={children || value} onClick={onClick} {...props} {...(dropDown ? { 'data-bs-toggle': 'dropdown'} : {})}>
            {!loading && spinner && <span className="spinner-border spinner-border-sm me-2" role="status"></span>}
            {children || value}
            </button>
    )
}

export const ButtonList: React.FC<ButtonListProps> = ({
    className,
    style,
    children,
    justify,
}) => (
    <div className={`btn-list ${justify && 'justify-content'+justify} ${className}`} style={style}>{children}</div>
)

export const ButtonIcon: React.FC<ButtonProps> = (props) => <Button {...props} className='btn-icon'></Button>;

export const FaceBookButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-facebook'} {...props} />
export const TwitterButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-twitter'} {...props} />
export const GoogleButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-google'} {...props} />
export const YoutubeButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-youtube'} {...props} />
export const VimeoButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-vimeo'} {...props} />
export const DribbleButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-dribbble'} {...props} />
export const GuthubButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-github'} {...props} />
export const InstagramButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-instagram'} {...props} />
export const interestButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-pinterest'} {...props} />
export const VkButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-vk'} {...props} />
export const RssButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-rss'} {...props} />
export const FlickrButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-flickr'} {...props} />
export const BitBucketButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-bitbucket'} {...props} />
export const TablerButton: React.FC<ButtonProps> = (props) => <Button className={props.className + ' btn-tabler'} {...props} />
export default Button;
