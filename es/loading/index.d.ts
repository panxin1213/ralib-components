import React, { Component, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import 'nprogress/nprogress.css';
export interface LoadingProps {
    spin?: boolean;
    progress?: boolean;
    tip?: string;
    style?: CSSProperties;
}
export default class Loading extends Component<LoadingProps, unknown> {
    constructor(props: LoadingProps);
    static contextType: React.Context<import("../component-context").ComponentContextValue>;
    static propTypes: {
        spin: PropTypes.Requireable<boolean>;
        progress: PropTypes.Requireable<boolean>;
        tip: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        progress: boolean;
        spin: boolean;
    };
    componentWillUnmount(): void;
    render(): JSX.Element;
}
