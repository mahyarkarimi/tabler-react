import React, { HTMLAttributes, useMemo } from 'react';
import { Colors } from '../colors';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
    htmlType?: string;
    mode?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    disabled?: boolean;
    ghost?: boolean;
    color?: Colors;
    shape?: 'square' | 'pill';
    outline?: boolean;
    loading?: boolean;
    spinner?: boolean;
    dropDown?: boolean;
    size?: 'large' | 'small' | 'default'
    value?: string;
    skeleton?: boolean;
};

interface ButtonListProps extends HTMLAttributes<HTMLDivElement> {
    justify?: 'end' | 'center';
}

const Button = ({
    type = 'button',
    className,
    style,
    mode,
    disabled,
    color,
    ghost,
    shape,
    outline,
    dropDown,
    spinner,
    loading,
    size = 'default',
    children,
    value,
    skeleton,
    ...props
}: ButtonProps) => {

    const classes = useMemo(() => {
        const getMode = () => {
            if (outline) {
                return `btn-outline-${mode}`;
            }
            if (ghost) {
                `btn-ghost-${mode}`
            }
            return `btn-${mode}`
        }
        const getSize = (s: string) => {
            switch (s) {
                case 'large':
                    return 'btn-lg';
                case 'small':
                    return 'btn-sm';
                case 'default':
                default:
                    return '';
            }
        }

        return [
            'btn',
            mode && getMode(),
            disabled && 'disabled cursor-not-allowed',
            color && `btn-${color}`,
            shape && `btn-${shape}`,
            getSize(size),
            loading && 'btn-loading',
            dropDown && 'dropdown-toggle',
            loading && `btn-loading`,
            skeleton && 'placeholder',
            className
        ].filter(Boolean).join(' ');
    }, [mode, disabled, color, shape, ghost, outline, className, size, loading]);


    return (
        <button {...props} type={type} className={classes} style={style} value={value} {...(dropDown ? { 'data-bs-toggle': 'dropdown' } : {})}>
            {!loading && spinner && <span className="spinner-border spinner-border-sm me-2" role="status"></span>}
            {children || value}
        </button>
    )
}

export const ButtonList = ({
    className,
    children,
    justify,
    ...props
}: ButtonListProps) => (
    <div {...props} className={`btn-list ${justify && 'justify-content' + justify} ${className}`}>{children}</div>
)

export const ButtonIcon = (props: ButtonProps) => <Button {...props} className='btn-icon'></Button>;

export const FaceBookButton = (props: ButtonProps) => <Button className={props.className + ' btn-facebook'} {...props} />
export const TwitterButton = (props: ButtonProps) => <Button className={props.className + ' btn-twitter'} {...props} />
export const GoogleButton = (props: ButtonProps) => <Button className={props.className + ' btn-google'} {...props} />
export const YoutubeButton = (props: ButtonProps) => <Button className={props.className + ' btn-youtube'} {...props} />
export const VimeoButton = (props: ButtonProps) => <Button className={props.className + ' btn-vimeo'} {...props} />
export const DribbleButton = (props: ButtonProps) => <Button className={props.className + ' btn-dribbble'} {...props} />
export const GuthubButton = (props: ButtonProps) => <Button className={props.className + ' btn-github'} {...props} />
export const InstagramButton = (props: ButtonProps) => <Button className={props.className + ' btn-instagram'} {...props} />
export const interestButton = (props: ButtonProps) => <Button className={props.className + ' btn-pinterest'} {...props} />
export const VkButton = (props: ButtonProps) => <Button className={props.className + ' btn-vk'} {...props} />
export const RssButton = (props: ButtonProps) => <Button className={props.className + ' btn-rss'} {...props} />
export const FlickrButton = (props: ButtonProps) => <Button className={props.className + ' btn-flickr'} {...props} />
export const BitBucketButton = (props: ButtonProps) => <Button className={props.className + ' btn-bitbucket'} {...props} />
export const TablerButton = (props: ButtonProps) => <Button className={props.className + ' btn-tabler'} {...props} />
export default Button;
