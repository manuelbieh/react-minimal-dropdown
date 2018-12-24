// @flow
import * as React from 'react';
import css from './Dropdown.module.css';

type TriggerPropsT = {
    arrow: boolean,
    className?: string,
    children: any,
    ref: React.createRef,
    show?: boolean,
    toggle: () => void,
};

const Trigger = (
    {
        children,
        className = '',
        toggle,
        show,
        arrow,
        ...leftover
    }: TriggerPropsT,
    ref,
) => (
    <div
        {...leftover}
        ref={ref}
        onClick={toggle}
        className={`ReactMinimalDropdown__Trigger ${css.trigger ||
            ''} ${className} ${(arrow && css.arrow) || ''}`}
        aria-expanded={show}
        aria-haspopup="true"
    >
        {children}
    </div>
);

export default React.forwardRef(Trigger);
