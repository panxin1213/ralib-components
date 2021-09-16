import React, { ReactNode, CSSProperties } from 'react';
import { ButtonHTMLType } from 'antd/es/button/button';
export interface DrawerContentProps {
    prefixCls?: string;
    fullScreen?: boolean;
    loading?: boolean;
    loadingTip?: string;
    footer?: ReactNode;
    okHtmlType?: ButtonHTMLType;
    okText?: ReactNode;
    onOk?: () => void;
    cancelText?: any;
    onCancel?: () => void;
    style?: CSSProperties;
    bodyStyle?: CSSProperties;
}
declare const DrawerContent: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
export default DrawerContent;
