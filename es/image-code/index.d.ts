import React, { ChangeEvent } from 'react';
import './style.less';
export interface ImageCodeProps {
    className?: string;
    prefixCls?: string;
    value?: string | [any, any];
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    src?: () => string;
    placeholder?: string;
    errorImage?: string;
    imageWidth?: number | string;
}
export interface refProps {
    refresh: () => void;
}
declare const ImageCode: React.ForwardRefExoticComponent<ImageCodeProps & React.RefAttributes<refProps>>;
export default ImageCode;
