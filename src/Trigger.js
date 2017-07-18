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
        arrow: PropTypes.bool,
        toggle: PropTypes.func,
        show: PropTypes.bool,
    };

    get DOMNode() {
        return this.node;
    }

    render() {

        const { children, className='', toggle, show, arrow, ...leftover } = this.props;

        return (
            <div
                {...leftover}
                ref={(node) => { this.node = node; }}
                onClick={ toggle }
                className={`ReactMinimalDropdown__Trigger ${css.trigger || ''} ${className} ${arrow && css.arrow || ''}`}
                aria-expanded={ show }
                aria-haspopup="true" >
                { children }
            </div>
        );

    }

}
