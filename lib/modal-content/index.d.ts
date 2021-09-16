import React, { ReactNode, CSSProperties } from 'react';
export interface ModalContentProps {
    children?: ReactNode;
    prefixCls?: string;
    fullScreen?: boolean;
    fitHeight?: boolean;
    otherHeight?: number;
    loading?: boolean;
    loadingTip?: any;
    footer?: any;
    okHtmlType?: any;
    okText?: any;
    onOk?: () => void;
    cancelText?: any;
    onCancel?: () => void;
    style?: CSSProperties;
    bodyStyle?: CSSProperties;
}
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
export default ModalContent;
