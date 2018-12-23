// @flow
import * as React from 'react';
import css from './Dropdown.module.css';

type ContentPropsT = {
    children: any,
    className: string,
    ref: typeof React.createRef,
};

const Content = (
    { children, className = '', ...leftover }: ContentPropsT,
    ref,
) => (
    <div
        {...leftover}
        ref={ref}
        className={`ReactMinimalDropdown__Content ${css.content ||
            ''} ${className}`}
    >
        <div className={css.inner}>{children}</div>
    </div>
);

export default React.forwardRef(Content);
