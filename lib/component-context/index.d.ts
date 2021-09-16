import React, { ReactNode, ReactChildren } from 'react';
export interface ComponentContextValue {
    children?: ReactChildren;
    loadingTip?: string;
    prefixCls?: string;
    okText?: string | ReactNode;
    cancelText?: string | ReactNode;
    layoutPageOtherHeight?: number;
    isMobile?: boolean;
    mobileColumnDefaultWidth?: number;
}
export declare const ComponentContext: React.Context<ComponentContextValue>;
export default ComponentContext;
export declare function ComponentProvider(props: ComponentContextValue): JSX.Element;
export declare const ComponentConsumer: React.Consumer<ComponentContextValue>;
