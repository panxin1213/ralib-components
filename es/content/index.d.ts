import React, { ReactNode, CSSProperties } from 'react';
import './style.less';
export interface ContentProps {
    className?: string;
    fitHeight?: boolean;
    otherHeight?: number;
    offsetHeight?: number;
    style?: CSSProperties;
    loading?: boolean;
    loadingTip?: any;
    prefixCls?: string;
    isRoot?: boolean;
    children?: ReactNode;
}
declare const Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<HTMLDivElement>>;
export default Content;
