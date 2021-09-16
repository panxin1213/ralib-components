import { CSSProperties, ReactNode } from 'react';
export interface ToolBarProps {
    style?: CSSProperties;
    children?: ReactNode;
}
export default function ToolBar(props: ToolBarProps): JSX.Element;
