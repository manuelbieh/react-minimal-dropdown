import React from 'react';
let PropTypes;
if (process.env.NODE_ENV !== 'production') {
    PropTypes = require('prop-types');
}

import css from './Dropdown.css';

export default class Trigger extends React.PureComponent {

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
        toggle: PropTypes.func,
    };

    get DOMNode() {
        return this.node;
    }

    render() {

        const { children, className='ReactMinimalDropdown__Trigger', toggle, ...leftover } = this.props;

        return (
            <div {...leftover} ref={(node) => { this.node = node; }} onClick={ toggle } className={`${css.trigger || ''} ${className}`}>
                { children }
            </div>
        );

    }

}
