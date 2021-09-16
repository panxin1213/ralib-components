import React from 'react';
import { History } from 'history';
export interface Error404Props {
    homePath?: string;
    history?: History;
}
declare function Error404(props: Error404Props): JSX.Element;
declare const _default: React.ComponentClass<Pick<import("react-router").RouteComponentProps<any, import("react-router").StaticContext, unknown>, never>, any> & import("react-router").WithRouterStatics<typeof Error404>;
export default _default;
